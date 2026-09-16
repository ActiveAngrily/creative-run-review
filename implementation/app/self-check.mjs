import assert from 'node:assert/strict';
import {
  BRIEF, LIMITATIONS, buildExportRecord, classifyObservation, countRetries,
  parseOperationalValue, toCsv, toJson, toMarkdown
} from './logic.mjs';

const ready = overrides => classifyObservation({
  decodeState: 'ready', reportedType: 'image/png', sizeBytes: 1024, width: 1080, height: 1080, ...overrides
});
const pass = ready({});
assert.equal(pass.dimensions.status, 'Pass');
assert.equal(pass.aspect.status, 'Pass');

const wide = ready({ width: 1200, height: 900 });
assert.equal(wide.dimensions.status, 'Fail');
assert.equal(wide.aspect.status, 'Fail');

for (const observation of [
  {},
  { decodeState: 'unreadable', reportedType: 'image/png', sizeBytes: 10 },
  { decodeState: 'ready', reportedType: 'image/png', sizeBytes: 0, width: 0, height: 1080 },
  { decodeState: 'ready', reportedType: 'image/png', sizeBytes: NaN, width: NaN, height: 1080 },
  { decodeState: 'ready', reportedType: 'image/png', sizeBytes: Infinity, width: Infinity, height: 1080 }
]) {
  const result = classifyObservation(observation);
  assert.notEqual(result.dimensions.status, 'Pass');
  assert.notEqual(result.aspect.status, 'Pass');
  if (observation.decodeState !== 'ready' || !Number.isFinite(observation.sizeBytes) || observation.sizeBytes === 0) {
    assert.notEqual(result.size.status, 'Pass');
  }
}
const unsupported = classifyObservation({ decodeState: 'unsupported', reportedType: 'text/plain', sizeBytes: 40 });
assert.equal(unsupported.type.status, 'Fail');
assert.equal(unsupported.readability.status, 'Unknown');
assert.equal(unsupported.size.status, 'Unknown');
const unsupportedAllowedType = classifyObservation({ decodeState: 'unsupported', reportedType: 'image/png', sizeBytes: 40 });
assert.equal(unsupportedAllowedType.type.status, 'Unknown');
const oversized = classifyObservation({ decodeState: 'oversized', reportedType: 'image/png', sizeBytes: 11 * 1024 * 1024 });
assert.equal(oversized.readability.status, 'Unknown');
assert.equal(oversized.type.status, 'Unknown');
assert.equal(oversized.dimensions.status, 'Unknown');
assert.equal(oversized.aspect.status, 'Unknown');
assert.equal(oversized.size.status, 'Fail');

assert.deepEqual(parseOperationalValue(''), { status: 'Unknown', value: null });
assert.deepEqual(parseOperationalValue('   '), { status: 'Unknown', value: null });
assert.deepEqual(parseOperationalValue('-1'), { status: 'Invalid', value: null });
assert.deepEqual(parseOperationalValue('Infinity'), { status: 'Invalid', value: null });
assert.deepEqual(parseOperationalValue('0'), { status: 'Recorded', value: 0 });

const baseAttempt = (id, relationship) => ({
  attemptId: id, ordinal: Number(id.at(-1)), label: `Label ${id}`, inputClass: 'Synthetic', modelProvider: 'Synthetic generator',
  sourceLimitation: 'Synthetic | limitation, with "quotes"\nand a newline.', permittedUseDeclaration: '',
  observation: { fileName: `${id}.png`, reportedType: 'image/png', sizeBytes: 1024, decodeState: 'ready', width: 1080, height: 1080, source: 'browser-observed', limitation: 'Limited.' },
  checks: ready({}), human: { reviewerLabel: 'Synthetic reviewer', briefFit: '2', craftLegibility: '2', coherence: 'Not assessed', note: 'Readable | but subjective.', failureTags: ['none observed'] },
  operational: {
    relationship, predecessorId: '',
    credit: { value: null, status: 'Unknown', unit: 'credits', source: 'Unknown', precision: 'Unknown', note: 'Unknown' },
    elapsed: { value: 0, status: 'Recorded', unit: 'seconds', source: 'Synthetic', precision: 'exact', note: 'Synthetic zero' }
  },
  file: new Uint8Array([1, 2, 3]), objectUrl: 'blob:must-not-export', path: '/must/not/export', mediaBytes: 'secret', hiddenRuntime: true
});
const attempts = [baseAttempt('A01', 'original'), baseAttempt('A02', 'retry'), baseAttempt('A03', 'revision')];
attempts[2].inputClass = 'Unknown';
assert.equal(countRetries(attempts), 1);

const record = buildExportRecord({
  reviewId: 'CRR-SYN-001', createdAt: '2026-09-09T00:00:00.000Z', updatedAt: '2026-09-09T00:00:00.000Z',
  evidenceBoundary: 'Synthetic demo only', limitations: LIMITATIONS, brief: BRIEF, attempts,
  decision: { outcome: 'Hold / no decision', selectedAttemptId: '', rationale: 'Unknown remains material.', nextAction: 'Inspect locally.', limitations: 'Not approval.' },
  hiddenRuntime: { secret: true }
}, '2026-09-09T00:00:00.000Z');

const keys = value => value && typeof value === 'object'
  ? Object.entries(value).flatMap(([key, child]) => [key, ...keys(child)]) : [];
for (const forbidden of ['file', 'objectUrl', 'path', 'mediaBytes', 'hiddenRuntime']) assert(!keys(record).includes(forbidden));
assert.equal(record.attempts[2].permittedUseDeclaration, 'Unknown');

const json = toJson(record);
const csv = toCsv(record);
const markdown = toMarkdown(record);
for (const output of [json, csv, markdown]) {
  assert(output.includes('Unknown'));
  assert(output.includes('limitation'));
  assert(!output.includes('blob:must-not-export'));
  assert(!output.includes('/must/not/export'));
  assert(!output.includes('secret'));
}
assert(csv.includes('"Synthetic | limitation, with ""quotes""\nand a newline."'));
assert(csv.includes('"fileObservationSource"'));
assert(csv.includes('"objectiveChecksJson"'));
assert(csv.includes('"permittedUseDeclaration"'));
assert(csv.includes('"retryCount"'));
assert(csv.includes('browser-observed'));
assert(markdown.includes('Readable \\| but subjective.'));
for (const output of [json, csv, markdown]) assert(output.includes('2026-09-09T00:00:00.000Z'));

console.log('Creative Run Review self-check passed.');
