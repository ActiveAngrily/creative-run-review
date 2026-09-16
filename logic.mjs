export const BRIEF = Object.freeze({
  briefId: 'BR-SYN-001',
  title: 'Orbit Spring launch tile',
  text: 'Create a square launch tile for the invented Orbit Spring kinetic desk sculpture.',
  version: '1.0',
  creativeRequirements: [
    'Use the headline “MAKE ROOM FOR WONDER”.',
    'Use an electric-violet, warm-coral, ivory, and near-black studio palette.',
    'Do not depict real people or third-party brand marks.'
  ],
  allowedReportedTypes: ['image/jpeg', 'image/png'],
  targetWidth: 1080,
  targetHeight: 1080,
  targetAspectRatio: 1,
  aspectTolerance: 0.01,
  maxBriefBytes: 5 * 1024 * 1024,
  maxDecodeBytes: 10 * 1024 * 1024
});

export const LIMITATIONS = Object.freeze([
  'This is a fictional local demo, not an official HexCoded product or production system.',
  'The brief, images, model names, values, reviews, and decisions are fictional. The app uses no live HexCoded system, workflow, customer file, or company data.',
  'The project was not tested with real HexCoded users. It does not prove demand, business value, time or cost savings, adoption, or that this workflow is better than a spreadsheet.',
  'Browser checks do not prove quality, legal rights, consent, ownership, a complete source history, disclosure compliance, approval, or permission to publish.',
  'Run details keep the values and sources you enter. They do not prove cost, productivity, return on investment, or model performance.',
  'Images stay local. Exports contain written review details only.',
  'This project does not certify accessibility, security, privacy, copyright, consent, legal compliance, or production readiness.'
]);

const finitePositive = value => Number.isFinite(value) && value > 0;
const check = (property, expected, observed, status, reason, source, limitation) => ({
  property, expected, observed, status, reason, source, limitation
});

export function classifyObservation(observation = {}, brief = BRIEF) {
  const {
    decodeState = 'missing', reportedType = '', sizeBytes, width, height,
    source = 'browser-observed', limitation = 'The browser reports these file details. This is not proof of the file signature or encoded pixels.'
  } = observation;
  const ready = decodeState === 'ready';
  const dimensionsValid = ready && finitePositive(width) && finitePositive(height);
  const sizeValid = ready && finitePositive(sizeBytes);
  const aspectRatio = dimensionsValid ? width / height : null;

  const readability = check(
    'Readability', 'Browser can open the image', ready ? 'Opened' : 'Unavailable',
    ready ? 'Pass' : 'Unknown',
    ready ? 'The browser opened the image.' : `The browser could not confirm the image. State: ${decodeState}.`,
    source, limitation
  );

  let typeStatus = 'Unknown';
  let typeReason = 'The reported type is missing or the browser could not open the image.';
  if (ready && reportedType) {
    typeStatus = brief.allowedReportedTypes.includes(reportedType) ? 'Pass' : 'Fail';
    typeReason = typeStatus === 'Pass' ? 'The reported type is allowed and the browser opened the image.' : 'The reported type is not JPEG or PNG.';
  } else if (decodeState === 'unsupported' && reportedType) {
    const allowedType = brief.allowedReportedTypes.includes(reportedType);
    typeStatus = allowedType ? 'Unknown' : 'Fail';
    typeReason = allowedType
      ? 'The reported type is allowed, but the browser could not open the image. This check stays Unknown.'
      : 'The reported type is not JPEG or PNG. Checks that need the image to open stay Unknown.';
  }

  const type = check('Reported type', 'image/jpeg or image/png', reportedType || 'Unavailable', typeStatus, typeReason, source, limitation);
  const dimensions = check(
    'Dimensions', `${brief.targetWidth} × ${brief.targetHeight} px`,
    dimensionsValid ? `${width} × ${height} px` : 'Unavailable',
    dimensionsValid ? (width === brief.targetWidth && height === brief.targetHeight ? 'Pass' : 'Fail') : 'Unknown',
    dimensionsValid ? 'Compared the image size found by your browser with the required size.' : 'The browser could not find a usable image width and height.',
    source, limitation
  );
  const aspect = check(
    'Aspect ratio', `${brief.targetAspectRatio}:1 (±${brief.aspectTolerance})`,
    aspectRatio === null ? 'Unavailable' : aspectRatio.toFixed(3),
    aspectRatio === null ? 'Unknown' : (Math.abs(aspectRatio - brief.targetAspectRatio) <= brief.aspectTolerance ? 'Pass' : 'Fail'),
    aspectRatio === null ? 'The ratio needs a usable image width and height.' : 'Calculated from the width and height found by your browser.',
    source, limitation
  );

  let sizeStatus = 'Unknown';
  let sizeReason = 'The app could not get a usable file size from an image the browser opened.';
  if (decodeState === 'oversized' && finitePositive(sizeBytes)) {
    sizeStatus = 'Fail';
    sizeReason = 'The file is over the 5 MiB brief limit. The browser did not open it because it is also over the 10 MiB loading limit.';
  } else if (sizeValid) {
    sizeStatus = sizeBytes <= brief.maxBriefBytes ? 'Pass' : 'Fail';
    sizeReason = 'Compared the file size reported by your browser with the 5 MiB limit.';
  }
  const size = check(
    'File size', '≤ 5 MiB', finitePositive(sizeBytes) ? `${sizeBytes} bytes` : 'Unavailable',
    sizeStatus, sizeReason, source, limitation
  );

  return { readability, type, dimensions, aspect, size, aspectRatio };
}

export function parseOperationalValue(raw) {
  if (raw === null || raw === undefined || (typeof raw === 'string' && raw.trim() === '')) return { status: 'Unknown', value: null };
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? { status: 'Recorded', value } : { status: 'Invalid', value: null };
}

export const countRetries = attempts => attempts.filter(attempt => attempt.operational.relationship === 'retry').length;

const cleanOperational = item => ({
  value: item.value ?? null,
  status: item.status || 'Unknown',
  unit: item.unit || 'Unknown',
  source: item.source || 'Unknown',
  precision: item.precision || 'Unknown',
  note: item.note || 'Unknown'
});

export function buildExportRecord(session, exportedAt) {
  return {
    schemaVersion: '1.0',
    export: { formatVersion: '1.0', exportedAt },
    review: {
      reviewId: session.reviewId,
      createdAt: session.createdAt,
      updatedAt: session.updatedAt,
      evidenceBoundary: session.evidenceBoundary,
      limitations: [...session.limitations]
    },
    brief: {
      briefId: session.brief.briefId,
      title: session.brief.title,
      text: session.brief.text,
      version: session.brief.version,
      creativeRequirements: [...session.brief.creativeRequirements],
      allowedReportedTypes: [...session.brief.allowedReportedTypes],
      targetWidth: session.brief.targetWidth,
      targetHeight: session.brief.targetHeight,
      targetAspectRatio: session.brief.targetAspectRatio,
      aspectTolerance: session.brief.aspectTolerance,
      maxBriefBytes: session.brief.maxBriefBytes,
      maxDecodeBytes: session.brief.maxDecodeBytes
    },
    attempts: session.attempts.map(attempt => ({
      attemptId: attempt.attemptId,
      ordinal: attempt.ordinal,
      label: attempt.label,
      inputClass: attempt.inputClass,
      modelProvider: attempt.modelProvider || 'Unknown',
      sourceLimitation: attempt.sourceLimitation || 'Unknown',
      permittedUseDeclaration: attempt.permittedUseDeclaration || (attempt.inputClass === 'Synthetic' ? 'Not applicable: included fictional example' : 'Unknown'),
      fileObservation: {
        fileName: attempt.observation.fileName || 'Unknown',
        reportedType: attempt.observation.reportedType || 'Unknown',
        sizeBytes: attempt.observation.sizeBytes ?? null,
        decodeState: attempt.observation.decodeState || 'missing',
        width: attempt.observation.width ?? null,
        height: attempt.observation.height ?? null,
        aspectRatio: attempt.checks.aspectRatio ?? null,
        source: attempt.observation.source || 'Unknown',
        limitation: attempt.observation.limitation || 'Unknown'
      },
      objectiveChecks: Object.fromEntries(['readability', 'type', 'dimensions', 'aspect', 'size'].map(key => [key, { ...attempt.checks[key] }])),
      humanJudgment: {
        reviewerLabel: attempt.human.reviewerLabel || 'Not assessed',
        briefFit: attempt.human.briefFit,
        craftLegibility: attempt.human.craftLegibility,
        coherence: attempt.human.coherence,
        note: attempt.human.note || 'Not assessed',
        failureTags: [...attempt.human.failureTags]
      },
      operational: {
        relationship: attempt.operational.relationship,
        predecessorId: attempt.operational.predecessorId || 'Unknown',
        credit: cleanOperational(attempt.operational.credit),
        elapsed: cleanOperational(attempt.operational.elapsed)
      }
    })),
    summary: {
      retryCount: countRetries(session.attempts),
      note: 'This count includes only attempts marked retry. The app does not combine costs, times, ratings, or models.'
    },
    decision: {
      outcome: session.decision.outcome,
      selectedAttemptId: session.decision.outcome === 'Selected for this comparison' ? session.decision.selectedAttemptId : null,
      rationale: session.decision.rationale,
      nextAction: session.decision.nextAction || 'Unknown',
      limitations: session.decision.limitations
    }
  };
}

const csvValue = value => `"${String(value ?? '').replaceAll('"', '""')}"`;
const mdValue = value => String(value ?? '').replaceAll('\\', '\\\\').replaceAll('|', '\\|').replaceAll('\n', '<br>');
const checkStatus = (attempt, key) => attempt.objectiveChecks[key]?.status || 'Unknown';

export function toJson(record) {
  return JSON.stringify(record, null, 2);
}

export function toCsv(record) {
  const columns = [
    'schemaVersion', 'exportFormatVersion', 'exportedAt', 'reviewId', 'reviewCreatedAt', 'reviewUpdatedAt',
    'evidenceBoundary', 'reviewLimitations', 'briefContract', 'attemptId', 'ordinal', 'label', 'inputClass', 'modelProvider',
    'inputLimitation', 'permittedUseDeclaration',
    'fileName', 'reportedType', 'sizeBytes', 'decodeState', 'width', 'height', 'aspectRatio', 'fileObservationSource', 'fileObservationLimitation',
    'readabilityStatus', 'typeStatus', 'dimensionsStatus', 'aspectStatus', 'sizeStatus',
    'objectiveChecksJson',
    'reviewerLabel', 'briefFit', 'craftLegibility', 'coherence', 'humanNote', 'failureTags',
    'relationship', 'predecessorId', 'creditValue', 'creditUnit', 'creditStatus', 'creditSource', 'creditPrecision', 'creditNote',
    'elapsedValue', 'elapsedUnit', 'elapsedStatus', 'elapsedSource', 'elapsedPrecision', 'elapsedNote',
    'retryCount', 'summaryNote', 'decisionOutcome', 'selectedAttemptId', 'decisionRationale', 'nextAction', 'decisionLimitations'
  ];
  const rows = record.attempts.map(attempt => [
    record.schemaVersion, record.export.formatVersion, record.export.exportedAt, record.review.reviewId,
    record.review.createdAt, record.review.updatedAt, record.review.evidenceBoundary, record.review.limitations.join(' | '),
    JSON.stringify(record.brief), attempt.attemptId, attempt.ordinal, attempt.label,
    attempt.inputClass, attempt.modelProvider, attempt.sourceLimitation, attempt.permittedUseDeclaration,
    attempt.fileObservation.fileName, attempt.fileObservation.reportedType,
    attempt.fileObservation.sizeBytes, attempt.fileObservation.decodeState, attempt.fileObservation.width,
    attempt.fileObservation.height, attempt.fileObservation.aspectRatio, attempt.fileObservation.source, attempt.fileObservation.limitation,
    checkStatus(attempt, 'readability'), checkStatus(attempt, 'type'),
    checkStatus(attempt, 'dimensions'), checkStatus(attempt, 'aspect'), checkStatus(attempt, 'size'),
    JSON.stringify(attempt.objectiveChecks), attempt.humanJudgment.reviewerLabel, attempt.humanJudgment.briefFit,
    attempt.humanJudgment.craftLegibility, attempt.humanJudgment.coherence,
    attempt.humanJudgment.note, attempt.humanJudgment.failureTags.join(' | '), attempt.operational.relationship,
    attempt.operational.predecessorId, attempt.operational.credit.value, attempt.operational.credit.unit,
    attempt.operational.credit.status, attempt.operational.credit.source, attempt.operational.credit.precision,
    attempt.operational.credit.note, attempt.operational.elapsed.value, attempt.operational.elapsed.unit,
    attempt.operational.elapsed.status, attempt.operational.elapsed.source, attempt.operational.elapsed.precision,
    attempt.operational.elapsed.note, record.summary.retryCount, record.summary.note, record.decision.outcome,
    record.decision.selectedAttemptId, record.decision.rationale, record.decision.nextAction, record.decision.limitations
  ]);
  return [columns, ...rows].map(row => row.map(csvValue).join(',')).join('\n');
}

export function toMarkdown(record) {
  const lines = [
    '# Creative Run Review', '',
    `- Schema: ${mdValue(record.schemaVersion)}`,
    `- Export format version: ${mdValue(record.export.formatVersion)}`,
    `- Exported at: ${mdValue(record.export.exportedAt)}`,
    `- Review: ${mdValue(record.review.reviewId)}`,
    `- Review created / updated: ${mdValue(record.review.createdAt)} / ${mdValue(record.review.updatedAt)}`,
    `- Brief: ${mdValue(record.brief.briefId)}: ${mdValue(record.brief.title)}`,
    `- Brief version: ${mdValue(record.brief.version)}`,
    `- Brief text: ${mdValue(record.brief.text)}`,
    `- What this review can show: ${mdValue(record.review.evidenceBoundary)}`, '',
    '### Creative requirements', '',
    ...record.brief.creativeRequirements.map(item => `- ${mdValue(item)}`), '',
    '### Automatic file-check rules', '',
    `- Reported type: ${mdValue(record.brief.allowedReportedTypes.join(' or '))}`,
    `- Dimensions: ${mdValue(record.brief.targetWidth)} × ${mdValue(record.brief.targetHeight)} px`,
    `- Aspect: ${mdValue(record.brief.targetAspectRatio)} ± ${mdValue(record.brief.aspectTolerance)}`,
    `- File size: ≤ ${mdValue(record.brief.maxBriefBytes)} bytes`,
    `- Decode ceiling: ${mdValue(record.brief.maxDecodeBytes)} bytes`, '',
    '## Attempts', '',
    '| Attempt | Input | Readability | Type | Dimensions | Aspect | Size | Your brief-fit rating | Attempt type | Credit | Time taken |',
    '|---|---|---|---|---|---|---|---|---|---|---|'
  ];
  for (const attempt of record.attempts) {
    lines.push(`| ${mdValue(attempt.attemptId)} | ${mdValue(attempt.inputClass)} | ${mdValue(checkStatus(attempt, 'readability'))} | ${mdValue(checkStatus(attempt, 'type'))} | ${mdValue(checkStatus(attempt, 'dimensions'))} | ${mdValue(checkStatus(attempt, 'aspect'))} | ${mdValue(checkStatus(attempt, 'size'))} | ${mdValue(attempt.humanJudgment.briefFit)} | ${mdValue(attempt.operational.relationship)} | ${mdValue(`${attempt.operational.credit.status}: ${attempt.operational.credit.value ?? 'Unknown'} ${attempt.operational.credit.unit}`)} | ${mdValue(`${attempt.operational.elapsed.status}: ${attempt.operational.elapsed.value ?? 'Unknown'} ${attempt.operational.elapsed.unit}`)} |`);
  }
  lines.push('', '### Attempt detail', '');
  for (const attempt of record.attempts) {
    const file = attempt.fileObservation;
    lines.push(
      `#### ${mdValue(attempt.attemptId)}: ${mdValue(attempt.label)}`, '',
      `- Input / model or service: ${mdValue(attempt.inputClass)} / ${mdValue(attempt.modelProvider)}`,
      `- What the input source cannot show: ${mdValue(attempt.sourceLimitation)}`,
      `- Permission statement: ${mdValue(attempt.permittedUseDeclaration)}`,
      `- File details found by the browser: ${mdValue(file.fileName)}; ${mdValue(file.reportedType)}; ${mdValue(file.sizeBytes ?? 'Unknown')} bytes; ${mdValue(file.decodeState)}; ${mdValue(file.width ?? 'Unknown')} × ${mdValue(file.height ?? 'Unknown')} px; aspect ${mdValue(file.aspectRatio ?? 'Unknown')}`,
      `- File-detail source and limits: ${mdValue(file.source)} / ${mdValue(file.limitation)}`, '',
      '**Automatic file checks**', ''
    );
    for (const item of Object.values(attempt.objectiveChecks)) {
      lines.push(`- ${mdValue(item.property)}: ${mdValue(item.status)}; found ${mdValue(item.observed)}; needed ${mdValue(item.expected)}; ${mdValue(item.reason)} Source: ${mdValue(item.source)}. Limits: ${mdValue(item.limitation)}`);
    }
    lines.push(
      '', '**Your review**', '',
      `- Reviewer: ${mdValue(attempt.humanJudgment.reviewerLabel)}`,
      `- Brief fit / visual craft and text clarity / visual coherence: ${mdValue(attempt.humanJudgment.briefFit)} / ${mdValue(attempt.humanJudgment.craftLegibility)} / ${mdValue(attempt.humanJudgment.coherence)}`,
      `- Note: ${mdValue(attempt.humanJudgment.note)}`,
      `- Problems noticed: ${mdValue(attempt.humanJudgment.failureTags.join(', ') || 'none entered')}`, '',
      '**Run details**', '',
      `- Attempt type / earlier attempt: ${mdValue(attempt.operational.relationship)} / ${mdValue(attempt.operational.predecessorId)}`,
      `- Credit: ${mdValue(attempt.operational.credit.status)}; ${mdValue(attempt.operational.credit.value ?? 'Unknown')} ${mdValue(attempt.operational.credit.unit)}; source ${mdValue(attempt.operational.credit.source)}; how exact ${mdValue(attempt.operational.credit.precision)}; ${mdValue(attempt.operational.credit.note)}`,
      `- Time taken: ${mdValue(attempt.operational.elapsed.status)}; ${mdValue(attempt.operational.elapsed.value ?? 'Unknown')} ${mdValue(attempt.operational.elapsed.unit)}; source ${mdValue(attempt.operational.elapsed.source)}; how exact ${mdValue(attempt.operational.elapsed.precision)}; ${mdValue(attempt.operational.elapsed.note)}`, ''
    );
  }
  lines.push(
    `Retry count: ${mdValue(record.summary.retryCount)}. ${mdValue(record.summary.note)}`, '',
    '## Decision', '',
    `- Outcome: ${mdValue(record.decision.outcome)}`,
    `- Selected attempt: ${mdValue(record.decision.selectedAttemptId || 'Not applicable')}`,
    `- Reason for the decision: ${mdValue(record.decision.rationale)}`,
    `- Next action: ${mdValue(record.decision.nextAction)}`,
    `- What this decision does not prove: ${mdValue(record.decision.limitations)}`, '',
    '## Limits', '', ...record.review.limitations.map(item => `- ${mdValue(item)}`), ''
  );
  return lines.join('\n');
}
