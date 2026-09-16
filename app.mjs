import {
  BRIEF, LIMITATIONS, buildExportRecord, classifyObservation, parseOperationalValue,
  toCsv, toJson, toMarkdown
} from './logic.mjs?v=4';

const fixtureLimitation = 'Synthetic example made for BR-SYN-001. It is not a real model output or brand, and it does not show model performance.';
const browserLimitation = 'Your browser reports the file details and image size. These details do not prove the file signature, hidden image data (EXIF), encoded pixels, quality, source history, or rights.';
const sourceOptions = ['Synthetic', 'copied from a service screen', 'entered known value', 'entered estimate', 'Unknown'];
const precisionOptions = ['exact', 'estimate', 'range', 'Unknown'];
const relationshipOptions = ['original', 'retry', 'revision', 'failed render', 'Unknown'];
const ratingOptions = ['0', '1', '2', 'Not assessed'];
const failureTags = ['brief mismatch', 'visible technical defect', 'composition/legibility', 'text rendering', 'unexpected model behavior', 'other', 'none observed'];
const fixtureData = [
  {
    label: 'Signal', previewSrc: './fixtures/attempt-01.png', fileName: 'attempt-01.png', reportedType: 'image/png', sizeBytes: 1605765,
    width: 1080, height: 1080, relationship: 'original', predecessorId: '', credit: 12, elapsed: 34,
    human: { briefFit: '2', craftLegibility: '2', coherence: 'Not assessed', note: 'Headline is legible, the sculpture reads immediately, and the palette closely follows the fictional brief.', failureTags: ['none observed'] }
  },
  {
    label: 'Pressure', previewSrc: './fixtures/attempt-02.jpg', fileName: 'attempt-02.jpg', reportedType: 'image/jpeg', sizeBytes: 358476,
    width: 1200, height: 900, relationship: 'revision', predecessorId: 'A01', credit: 9, elapsed: 29,
    human: { briefFit: '1', craftLegibility: '1', coherence: 'Not assessed', note: 'The energetic crop is plausible, but the wide canvas fails the square brief and the headline feels compressed.', failureTags: ['composition/legibility'] }
  },
  {
    label: 'Drift', previewSrc: './fixtures/attempt-03.png', fileName: 'attempt-03.png', reportedType: 'image/png', sizeBytes: 1531733,
    width: 1080, height: 1080, relationship: 'retry', predecessorId: 'A01', credit: null, elapsed: null,
    human: { briefFit: '1', craftLegibility: '2', coherence: 'Not assessed', note: 'The finish is clean, but the softer gallery scene makes the invented product hierarchy less immediate.', failureTags: ['brief mismatch'] }
  }
];

const now = () => new Date().toISOString();
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
})[char]);
const optionList = (options, selected) => options.map(option => `<option${option === selected ? ' selected' : ''}>${escapeHtml(option)}</option>`).join('');

function operational(value, unit, source = value === null ? 'Unknown' : 'Synthetic') {
  return {
    value, status: value === null ? 'Unknown' : 'Recorded', unit, source,
    precision: value === null ? 'Unknown' : 'exact',
    note: value === null ? 'Unknown: no value was given.' : 'Fictional value used only for this demo.'
  };
}

function fixtureAttempt(item, index) {
  const observation = {
    fileName: item.fileName, reportedType: item.reportedType, sizeBytes: item.sizeBytes,
    decodeState: 'ready', width: item.width, height: item.height,
    source: 'Synthetic example record and browser image check',
    limitation: `The project record provides the file size. The browser provides the image dimensions. ${browserLimitation}`
  };
  return {
    attemptId: `A0${index + 1}`, ordinal: index + 1, label: item.label,
    inputClass: 'Synthetic', modelProvider: `Synthetic generator ${String.fromCharCode(65 + index)}: invented`,
    sourceLimitation: fixtureLimitation, permittedUseDeclaration: 'Not applicable: included fictional example',
    previewSrc: item.previewSrc, fixture: true, objectUrl: null, file: null,
    observation, checks: classifyObservation(observation),
    human: { reviewerLabel: 'Synthetic reviewer', ...item.human },
    operational: {
      relationship: item.relationship, predecessorId: item.predecessorId,
      credit: operational(item.credit, 'credits'), elapsed: operational(item.elapsed, 'seconds')
    }
  };
}

function emptyAttempt(index) {
  const observation = {
    fileName: '', reportedType: '', sizeBytes: null, decodeState: 'missing', width: null, height: null,
    source: 'Unknown', limitation: 'No file selected; all dependent checks remain Unknown.'
  };
  return {
    attemptId: `A0${index + 1}`, ordinal: index + 1, label: `Attempt ${index + 1}`,
    inputClass: 'Unknown', modelProvider: '', sourceLimitation: 'Unknown: no input was supplied.',
    permittedUseDeclaration: '', previewSrc: '', fixture: false, objectUrl: null, file: null,
    observation, checks: classifyObservation(observation),
    human: { reviewerLabel: 'Not assessed', briefFit: 'Not assessed', craftLegibility: 'Not assessed', coherence: 'Not assessed', note: '', failureTags: [] },
    operational: {
      relationship: 'Unknown', predecessorId: '',
      credit: operational(null, 'credits'), elapsed: operational(null, 'seconds')
    }
  };
}

const createdAt = now();
const state = {
  reviewId: 'CRR-SYN-001', createdAt, updatedAt: createdAt,
    evidenceBoundary: 'This demo project uses fictional data and local browser checks. It was not tested with real HexCoded users and cannot prove that the company needs or would use it. It does not prove demand, business value, model performance, legal clearance, approval, or permission to publish.',
  limitations: [...LIMITATIONS], brief: BRIEF,
  attempts: fixtureData.map(fixtureAttempt),
  decision: {
    outcome: 'Hold / no decision', selectedAttemptId: '', rationale: '', nextAction: '',
    limitations: 'This human decision is not approval, permission to publish, or a general model ranking.'
  }
};

const grid = document.querySelector('#attempt-grid');
const summaryGrid = document.querySelector('#summary-grid');
const addButton = document.querySelector('#add-attempt');
const liveRegion = document.querySelector('#live-region');
const decisionError = document.querySelector('#decision-error');
const outcome = document.querySelector('#outcome');
const selectedWrap = document.querySelector('#selected-wrap');
const selectedAttempt = document.querySelector('#selected-attempt');
const rationale = document.querySelector('#rationale');
const nextAction = document.querySelector('#next-action');

const announce = message => {
  liveRegion.textContent = '';
  requestAnimationFrame(() => { liveRegion.textContent = message; });
};

const statusMeta = status => ({
  Pass: ['✓', 'status-pass'], Fail: ['!', 'status-fail'], Unknown: ['?', 'status-unknown'],
  'N/A': ['○', 'status-na']
}[status] || ['?', 'status-unknown']);

function statusBadge(status) {
  const [icon, className] = statusMeta(status);
  const label = status === 'N/A' ? 'Not applicable' : status;
  return `<span class='status ${className}'><span aria-hidden='true'>${icon}</span>${escapeHtml(label)}</span>`;
}

function ratingField(attempt, key, label) {
  const id = `${attempt.attemptId}-${key}`;
  return `<div class='field rating-field'><label for='${id}'>${label}</label><select id='${id}' data-bind='human.${key}'>${optionList(ratingOptions, attempt.human[key])}</select></div>`;
}

function operationBlock(attempt, key, title) {
  const item = attempt.operational[key];
  return `<div class='operation-block'>
    <h4>${title}</h4>
    <div class='operation-grid'>
      <div class='field'>
        <label for='${attempt.attemptId}-${key}-value'>Value <span class='sr-only'>for ${title}</span></label>
        <input id='${attempt.attemptId}-${key}-value' inputmode='decimal' value='${escapeHtml(item.value ?? '')}' data-operation='${key}' aria-describedby='${attempt.attemptId}-${key}-error' aria-invalid='${item.status === 'Invalid'}'>
        <span class='field-error' id='${attempt.attemptId}-${key}-error'>${item.status === 'Invalid' ? 'Enter 0 or a positive number.' : ''}</span>
      </div>
      <div class='field'>
        <label for='${attempt.attemptId}-${key}-unit'>Unit</label>
        <input id='${attempt.attemptId}-${key}-unit' value='${escapeHtml(item.unit)}' data-bind='operational.${key}.unit'>
      </div>
      <div class='field'>
        <label for='${attempt.attemptId}-${key}-source'>Source</label>
        <select id='${attempt.attemptId}-${key}-source' data-bind='operational.${key}.source'>${optionList(sourceOptions, item.source)}</select>
      </div>
      <div class='field'>
        <label for='${attempt.attemptId}-${key}-precision'>How exact is it?</label>
        <select id='${attempt.attemptId}-${key}-precision' data-bind='operational.${key}.precision'>${optionList(precisionOptions, item.precision)}</select>
      </div>
    </div>
    <div class='field'>
      <label for='${attempt.attemptId}-${key}-note'>What this source cannot show</label>
      <input id='${attempt.attemptId}-${key}-note' value='${escapeHtml(item.note)}' data-bind='operational.${key}.note'>
    </div>
  </div>`;
}

function attemptCard(attempt) {
  const preview = attempt.previewSrc
    ? `<figure class='preview'><img src='${escapeHtml(attempt.previewSrc)}' alt='Preview of ${escapeHtml(attempt.attemptId)}, ${escapeHtml(attempt.label)}. The app does not describe the image content.'><figcaption class='preview-status'>${escapeHtml(attempt.observation.decodeState === 'ready' ? 'Ready' : attempt.observation.decodeState)}</figcaption></figure>`
    : `<div class='preview empty'><p><strong>No preview</strong><br>${escapeHtml(attempt.observation.decodeState === 'missing' ? 'Choose a local JPEG or PNG that you may inspect.' : attempt.observation.decodeState)}</p></div>`;
  const checks = ['readability', 'type', 'dimensions', 'aspect', 'size'].map(key => {
    const item = attempt.checks[key];
    return `<div class='check-row'>
      <div><p class='check-name'>${escapeHtml(item.property)}</p><p class='check-detail'>Found: ${escapeHtml(item.observed)} · Needed: ${escapeHtml(item.expected)}<br>${escapeHtml(item.reason)}</p></div>
      ${statusBadge(item.status)}
    </div>`;
  }).join('');
  const tags = failureTags.map(tag => {
    const id = `${attempt.attemptId}-tag-${tag.replaceAll(' ', '-')}`;
    return `<label for='${id}'><input id='${id}' type='checkbox' value='${escapeHtml(tag)}' data-tag${attempt.human.failureTags.includes(tag) ? ' checked' : ''}>${escapeHtml(tag)}</label>`;
  }).join('');

  return `<article class='attempt-card' data-attempt='${attempt.attemptId}' aria-labelledby='${attempt.attemptId}-title'>
    <header class='attempt-head'>
      <div><p>Attempt ${String(attempt.ordinal).padStart(2, '0')} · ${escapeHtml(attempt.attemptId)}</p><h3 id='${attempt.attemptId}-title'>${escapeHtml(attempt.label)}</h3></div>
      <span class='${attempt.fixture ? 'fixture-badge' : 'source-badge'}'>${escapeHtml(attempt.fixture ? 'Synthetic example' : attempt.inputClass)}</span>
    </header>
    ${preview}
    <div class='card-body'>
      <fieldset class='file-panel'>
        <legend>Image file</legend>
        <div class='field'>
          <label for='${attempt.attemptId}-file'>Choose a local JPEG or PNG</label>
          <input id='${attempt.attemptId}-file' type='file' accept='.jpg,.jpeg,.png,image/jpeg,image/png' data-file aria-describedby='${attempt.attemptId}-file-help ${attempt.attemptId}-file-error'>
          <span class='help' id='${attempt.attemptId}-file-help'>Confirm permission below before choosing a file. The picker may show other types; the app checks each file.</span>
          <span class='field-error' id='${attempt.attemptId}-file-error'></span>
        </div>
        <div class='field'>
          <label for='${attempt.attemptId}-model'>Model or service <span class='help'>(optional)</span></label>
          <input id='${attempt.attemptId}-model' value='${escapeHtml(attempt.modelProvider)}' data-bind='modelProvider' aria-describedby='${attempt.attemptId}-model-help'>
          <span class='help' id='${attempt.attemptId}-model-help'>Saved exactly as you type it. The app does not use it to rank attempts.</span>
        </div>
        <div class='permission'>
          <input id='${attempt.attemptId}-permission' type='checkbox' data-permission${attempt.permittedUseDeclaration.startsWith('Confirmed') ? ' checked' : ''}>
          <label for='${attempt.attemptId}-permission'>I may inspect this file here. This does not prove ownership, consent, or legal clearance.</label>
        </div>
      </fieldset>

      <fieldset class='objective'>
        <legend>Automatic file checks <span class='panel-label'>Browser</span></legend>
        <p class='help'>The browser checks each file detail separately. These checks do not judge quality, rights, or approval.</p>
        <div class='checks'>${checks}</div>
      </fieldset>

      <fieldset class='human-panel'>
        <legend>Your review <span class='panel-label'>You enter</span></legend>
        <p class='help'>Choose 0 if it misses the brief, 1 if it is mixed, 2 if it meets the brief, or Not assessed.</p>
        <div class='rating-grid'>
          ${ratingField(attempt, 'briefFit', 'Brief fit')}
          ${ratingField(attempt, 'craftLegibility', 'Visual craft and text clarity')}
          ${ratingField(attempt, 'coherence', 'Visual coherence')}
        </div>
        <div class='field'>
          <label for='${attempt.attemptId}-reviewer'>Reviewer name or label</label>
          <input id='${attempt.attemptId}-reviewer' value='${escapeHtml(attempt.human.reviewerLabel)}' data-bind='human.reviewerLabel'>
        </div>
        <div class='field'>
          <label for='${attempt.attemptId}-human-note'>Review note</label>
          <textarea id='${attempt.attemptId}-human-note' rows='3' data-bind='human.note'>${escapeHtml(attempt.human.note)}</textarea>
        </div>
        <div class='field'><span class='label'>Problems you noticed</span><div class='tags'>${tags}</div></div>
      </fieldset>

      <fieldset class='operations'>
        <legend>Run details</legend>
        <p class='help'>Record the attempt type, credits, and time with their sources. Blank means Unknown; enter 0 only for a known zero. Values are not added together or used to rank models.</p>
        <div class='operation-grid'>
          <div class='field'><label for='${attempt.attemptId}-relationship'>Attempt type</label><select id='${attempt.attemptId}-relationship' data-bind='operational.relationship'>${optionList(relationshipOptions, attempt.operational.relationship)}</select></div>
          <div class='field'><label for='${attempt.attemptId}-predecessor'>Earlier attempt ID</label><input id='${attempt.attemptId}-predecessor' value='${escapeHtml(attempt.operational.predecessorId)}' data-bind='operational.predecessorId'></div>
        </div>
        ${operationBlock(attempt, 'credit', 'Charged credits')}
        ${operationBlock(attempt, 'elapsed', 'Time taken')}
      </fieldset>

      <div class='provenance-strip'><strong>Source and ownership: ${escapeHtml(attempt.inputClass)}</strong>${escapeHtml(attempt.sourceLimitation)}</div>
    </div>
  </article>`;
}

function renderCards() {
  grid.innerHTML = state.attempts.map(attemptCard).join('');
  addButton.disabled = state.attempts.length >= 5;
  addButton.textContent = state.attempts.length >= 5 ? 'Maximum 5 attempts' : '＋ Add attempt';
}

function renderSummary() {
  summaryGrid.innerHTML = state.attempts.map(attempt => {
    const statuses = ['readability', 'type', 'dimensions', 'aspect', 'size'].map(key => attempt.checks[key].status);
    const fails = statuses.filter(status => status === 'Fail').length;
    const unknowns = statuses.filter(status => status === 'Unknown').length;
    const headline = fails ? `${fails} automatic check${fails > 1 ? 's' : ''} Fail` : unknowns ? `${unknowns} automatic check${unknowns > 1 ? 's are' : ' is'} Unknown` : 'All automatic checks Pass';
    const status = fails ? 'Fail' : unknowns ? 'Unknown' : 'Pass';
    return `<div class='summary-card'><strong>${escapeHtml(attempt.attemptId)} · ${escapeHtml(attempt.label)}</strong><p>${statusBadge(status)} ${escapeHtml(headline)}</p><p>Your brief-fit rating: ${escapeHtml(attempt.human.briefFit)}</p></div>`;
  }).join('');
  selectedAttempt.innerHTML = [`<option value=''>Choose an attempt</option>`, ...state.attempts.map(attempt => `<option value='${attempt.attemptId}'${attempt.attemptId === state.decision.selectedAttemptId ? ' selected' : ''}>${attempt.attemptId} · ${escapeHtml(attempt.label)}</option>`)].join('');
  selectedWrap.hidden = state.decision.outcome !== 'Selected for this comparison';
}

function setNested(target, path, value) {
  const keys = path.split('.');
  const final = keys.pop();
  const parent = keys.reduce((current, key) => current[key], target);
  parent[final] = value;
}

function revokeAttemptUrl(attempt) {
  const hadUrl = Boolean(attempt.objectUrl);
  if (hadUrl) URL.revokeObjectURL(attempt.objectUrl);
  attempt.objectUrl = null;
  attempt.file = null;
  return hadUrl;
}

function updateAttempt(attempt) {
  attempt.checks = classifyObservation(attempt.observation);
  state.updatedAt = now();
  renderCards();
  renderSummary();
}

async function inspectFile(input, attempt) {
  const error = document.querySelector(`#${attempt.attemptId}-file-error`);
  const permission = document.querySelector(`#${attempt.attemptId}-permission`);
  const file = input.files[0];
  if (!file) return;
  if (!permission.checked) {
    error.textContent = 'Confirm that you may inspect this file before choosing it.';
    input.value = '';
    announce(`${attempt.attemptId}: confirm that you may inspect this file.`);
    return;
  }

  const replacedFixture = attempt.fixture;
  revokeAttemptUrl(attempt);
  attempt.previewSrc = '';
  if (replacedFixture) attempt.modelProvider = '';
  attempt.fixture = false;
  attempt.inputClass = 'local file, ownership Unknown';
  attempt.permittedUseDeclaration = 'Confirmed: the reviewer may inspect this file here. This does not prove ownership, consent, or legal clearance.';
  attempt.sourceLimitation = 'This confirmation allows local inspection only. The file origin, rights, consent, source history, disclosure, approval, and permission to publish remain Unknown.';
  attempt.observation = {
    fileName: file.name, reportedType: file.type, sizeBytes: file.size,
    decodeState: 'checking', width: null, height: null, source: 'browser-observed', limitation: browserLimitation
  };

  if (!BRIEF.allowedReportedTypes.includes(file.type)) {
    attempt.observation.decodeState = 'unsupported';
    updateAttempt(attempt);
    announce(`${attempt.attemptId}: the reported file type is not allowed. Type is Fail. Checks that need the image to open are Unknown.`);
    return;
  }
  if (!Number.isFinite(file.size) || file.size <= 0) {
    attempt.observation.decodeState = 'unreadable';
    updateAttempt(attempt);
    announce(`${attempt.attemptId}: the file size is zero or cannot be read. Checks that need it are Unknown.`);
    return;
  }
  if (file.size > BRIEF.maxDecodeBytes) {
    attempt.observation.decodeState = 'oversized';
    updateAttempt(attempt);
    announce(`${attempt.attemptId}: the file is over the 10 MiB browser loading limit. Checks that need the image to open are Unknown.`);
    return;
  }

  const objectUrl = URL.createObjectURL(file);
  attempt.objectUrl = objectUrl;
  attempt.file = file;
  attempt.previewSrc = objectUrl;
  updateAttempt(attempt);
  const image = new Image();
  image.onload = () => {
    if (attempt.objectUrl !== objectUrl) return;
    attempt.observation.decodeState = 'ready';
    attempt.observation.width = image.naturalWidth;
    attempt.observation.height = image.naturalHeight;
    updateAttempt(attempt);
    announce(`${attempt.attemptId}: the browser opened the image. Automatic checks are updated.`);
  };
  image.onerror = () => {
    if (attempt.objectUrl !== objectUrl) return;
    URL.revokeObjectURL(objectUrl);
    attempt.objectUrl = null;
    attempt.file = null;
    attempt.previewSrc = '';
    attempt.observation.decodeState = 'unreadable';
    attempt.observation.width = null;
    attempt.observation.height = null;
    updateAttempt(attempt);
    announce(`${attempt.attemptId}: the browser could not open the image. Checks that need it are Unknown.`);
  };
  image.src = objectUrl;
}

grid.addEventListener('change', event => {
  const card = event.target.closest('[data-attempt]');
  if (!card) return;
  const attempt = state.attempts.find(item => item.attemptId === card.dataset.attempt);
  if (event.target.matches('[data-file]')) {
    inspectFile(event.target, attempt);
    return;
  }
  if (event.target.matches('[data-tag]')) {
    const inputs = [...card.querySelectorAll('[data-tag]')];
    if (event.target.checked && event.target.value === 'none observed') inputs.forEach(input => { if (input !== event.target) input.checked = false; });
    if (event.target.checked && event.target.value !== 'none observed') inputs.find(input => input.value === 'none observed').checked = false;
    attempt.human.failureTags = inputs.filter(input => input.checked).map(input => input.value);
    state.updatedAt = now();
    renderSummary();
    return;
  }
  if (event.target.dataset.bind) {
    setNested(attempt, event.target.dataset.bind, event.target.value);
    state.updatedAt = now();
    renderSummary();
  }
});

grid.addEventListener('input', event => {
  const card = event.target.closest('[data-attempt]');
  if (!card) return;
  const attempt = state.attempts.find(item => item.attemptId === card.dataset.attempt);
  if (event.target.dataset.operation) {
    const item = attempt.operational[event.target.dataset.operation];
    const previousStatus = item.status;
    const parsed = parseOperationalValue(event.target.value);
    item.value = parsed.value;
    item.status = parsed.status;
    event.target.setAttribute('aria-invalid', parsed.status === 'Invalid' ? 'true' : 'false');
    document.getElementById(event.target.getAttribute('aria-describedby')).textContent = parsed.status === 'Invalid' ? 'Enter 0 or a positive number.' : '';
    if (parsed.status === 'Invalid' && previousStatus !== 'Invalid') announce(`${attempt.attemptId}: ${event.target.dataset.operation} must be 0 or a positive number.`);
    if (previousStatus === 'Invalid' && parsed.status !== 'Invalid') announce(`${attempt.attemptId}: ${event.target.dataset.operation} value is now ${parsed.status.toLowerCase()}.`);
  } else if (event.target.dataset.bind) {
    setNested(attempt, event.target.dataset.bind, event.target.value);
  }
  state.updatedAt = now();
});

addButton.addEventListener('click', () => {
  if (state.attempts.length >= 5) return;
  state.attempts.push(emptyAttempt(state.attempts.length));
  renderCards();
  renderSummary();
  document.querySelector(`[data-attempt='${state.attempts.at(-1).attemptId}']`).scrollIntoView({ block: 'start' });
  announce(`${state.attempts.at(-1).attemptId} added. You can review up to five attempts.`);
});

outcome.addEventListener('change', () => {
  state.decision.outcome = outcome.value;
  selectedWrap.hidden = outcome.value !== 'Selected for this comparison';
  state.updatedAt = now();
});
selectedAttempt.addEventListener('change', () => { state.decision.selectedAttemptId = selectedAttempt.value; state.updatedAt = now(); });
rationale.addEventListener('input', () => { state.decision.rationale = rationale.value; state.updatedAt = now(); });
nextAction.addEventListener('input', () => { state.decision.nextAction = nextAction.value; state.updatedAt = now(); });

function validForExport() {
  const invalidOperation = state.attempts.some(attempt => ['credit', 'elapsed'].some(key => attempt.operational[key].status === 'Invalid'));
  const selectedExists = state.attempts.some(attempt => attempt.attemptId === state.decision.selectedAttemptId);
  if (!state.decision.rationale.trim()) return 'Explain your decision before exporting.';
  if (state.decision.outcome === 'Selected for this comparison' && !selectedExists) return 'Choose the attempt you selected before exporting.';
  if (invalidOperation) return 'Fix the credit or time values before exporting.';
  return '';
}

function download(format) {
  state.decision.rationale = rationale.value;
  state.decision.nextAction = nextAction.value;
  const error = validForExport();
  decisionError.textContent = error;
  if (error) {
    announce(`Export blocked. ${error}`);
    document.querySelector('#decision-form').scrollIntoView({ block: 'center' });
    return;
  }
  const record = buildExportRecord(state, now());
  const serializers = {
    json: [toJson, 'application/json', 'json'],
    csv: [toCsv, 'text/csv', 'csv'],
    md: [toMarkdown, 'text/markdown', 'md']
  };
  const [serialize, mime, extension] = serializers[format];
  const url = URL.createObjectURL(new Blob([serialize(record)], { type: `${mime};charset=utf-8` }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `creative-run-review-${BRIEF.briefId}.${extension}`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  announce(`${format.toUpperCase()} export created with review details only. It does not include image data or temporary app links.`);
}

document.querySelectorAll('.export-button').forEach(button => button.addEventListener('click', () => download(button.dataset.format)));

document.querySelector('#clear-session').addEventListener('click', () => {
  const revokedCount = state.attempts.reduce((count, attempt) => count + Number(revokeAttemptUrl(attempt)), 0);
  state.attempts = [0, 1, 2].map(emptyAttempt);
  state.reviewId = 'CRR-CLEARED';
  state.createdAt = now();
  state.updatedAt = state.createdAt;
  state.decision = {
    outcome: 'Hold / no decision', selectedAttemptId: '', rationale: '', nextAction: '',
    limitations: 'This human decision is not approval, permission to publish, or a general model ranking.'
  };
  outcome.value = state.decision.outcome;
  rationale.value = '';
  nextAction.value = '';
  decisionError.textContent = '';
  renderCards();
  renderSummary();
  announce(`Review session cleared. The page was reset and ${revokedCount} temporary image link${revokedCount === 1 ? ' was' : 's were'} released. Earlier downloads were not deleted.`);
});

window.addEventListener('beforeunload', () => state.attempts.forEach(revokeAttemptUrl));

async function confirmFixtureDimensions() {
  await Promise.all(state.attempts.filter(attempt => attempt.fixture).map(attempt => new Promise(resolve => {
    const image = new Image();
    image.onload = () => {
      attempt.observation.width = image.naturalWidth;
      attempt.observation.height = image.naturalHeight;
      attempt.observation.decodeState = finiteImageDimensions(image) ? 'ready' : 'unreadable';
      attempt.checks = classifyObservation(attempt.observation);
      resolve();
    };
    image.onerror = () => {
      attempt.observation.decodeState = 'unreadable';
      attempt.observation.width = null;
      attempt.observation.height = null;
      attempt.previewSrc = '';
      attempt.checks = classifyObservation(attempt.observation);
      resolve();
    };
    image.src = attempt.previewSrc;
  })));
  renderCards();
  renderSummary();
}

const finiteImageDimensions = image => Number.isFinite(image.naturalWidth) && image.naturalWidth > 0 && Number.isFinite(image.naturalHeight) && image.naturalHeight > 0;

renderCards();
renderSummary();
confirmFixtureDimensions();
