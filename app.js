const LANG_KEY = "fichaje_lang";
const YEAR_KEY = "fichaje_active_year";
const LEGACY_STORAGE_KEY = "fichaje_2026_entries";

const DB_NAME = "fichaje_db";
const DB_VERSION = 2;
const TASK_STORE = "tasks";
const ENTRY_STORE = "entries";

const YEAR_MIN = 2000;
const YEAR_MAX = 2100;

const I18N = {
  es: {
    pageTitle: "Fichaje Semanal",
    eyebrow: "Control semanal",
    language: "Idioma",
    calendarYear: "Año",
    mainTitle: "Fichaje de tareas",
    subtitle: "Registro de horas personales.",
    calendarChip: "Calendario activo",
    newEntry: "Nuevo fichaje",
    task: "Tarea",
    newTask: "Nueva tarea",
    selectTask: "Selecciona una tarea",
    createTask: "+ Crear nueva tarea",
    date: "Fecha",
    start: "Inicio",
    end: "Fin",
    submit: "Guardar fichaje",
    prevWeek: "Semana anterior",
    nextWeek: "Semana siguiente",
    summary: "Resumen de la semana",
    yearTotalTitle: "Total anual por tarea",
    week: "Semana",
    total: "Total",
    noRecords: "Sin registros",
    noWeekData: "Sin datos en esta semana.",
    noYearData: "Sin datos en este año.",
    fillAll: "Completa todos los campos.",
    chooseTask: "Selecciona una tarea o crea una nueva.",
    invalidYearDate: "La fecha debe pertenecer al año activo.",
    endAfterStart: "La hora de fin debe ser posterior a la de inicio.",
    saved: "Fichaje guardado correctamente.",
    newTaskPlaceholder: "Nombre de la nueva tarea",
    taskManagerTitle: "Gestión de tareas",
    taskManagerInputLabel: "Añadir tarea al listado",
    taskManagerAddBtn: "Añadir tarea",
    taskEdit: "Editar",
    taskDelete: "Borrar",
    noTasks: "Todavía no hay tareas guardadas.",
    taskAdded: "Tarea añadida correctamente.",
    taskUpdated: "Tarea actualizada correctamente.",
    taskDeleted: "Tarea borrada correctamente.",
    invalidTaskName: "El nombre de tarea no es válido.",
    duplicateTask: "Ya existe una tarea con ese nombre.",
    editTaskPrompt: "Nuevo nombre para '{{task}}'",
    deleteTaskConfirm: "¿Seguro que quieres borrar '{{task}}' y sus fichajes asociados?",
    chartTitle: "Gráfico comparativo de tareas",
    chartEmpty: "Añade fichajes para ver el gráfico comparativo.",
    chartHours: "Horas",
    timerTitle: "Cronómetro de fichaje",
    timerTaskLabel: "Tarea activa",
    timerStart: "Iniciar",
    timerPause: "Pausar",
    timerResume: "Reanudar",
    timerFinish: "Finalizar y guardar",
    timerCancel: "Cancelar",
    timerRunning: "Cronómetro en marcha.",
    timerPaused: "Cronómetro pausado.",
    timerCanceled: "Cronómetro cancelado.",
    timerSaved: "Fichaje guardado desde cronómetro.",
    timerNoActive: "No hay cronómetro activo.",
    entryEditorTitle: "Editar fichaje",
    entryEditorInfo: "Tarea: {{task}} | Fecha: {{date}}",
    entryEditorSave: "Guardar cambios",
    entryEditorCancel: "Cancelar edición",
    entryUpdated: "Fichaje actualizado correctamente.",
    clickToEdit: "Pulsa un fichaje para editar su tiempo."
  },
  en: {
    pageTitle: "Weekly Time Tracking",
    eyebrow: "Weekly control",
    language: "Language",
    calendarYear: "Year",
    mainTitle: "Task time tracking",
    subtitle: "Personal task tracking.",
    calendarChip: "Active calendar",
    newEntry: "New time log",
    task: "Task",
    newTask: "New task",
    selectTask: "Select a task",
    createTask: "+ Create new task",
    date: "Date",
    start: "Start",
    end: "End",
    submit: "Save time log",
    prevWeek: "Previous week",
    nextWeek: "Next week",
    summary: "Week summary",
    yearTotalTitle: "Year total by task",
    week: "Week",
    total: "Total",
    noRecords: "No records",
    noWeekData: "No data for this week.",
    noYearData: "No data for this year.",
    fillAll: "Please complete all fields.",
    chooseTask: "Select a task or create a new one.",
    invalidYearDate: "Date must belong to the active year.",
    endAfterStart: "End time must be later than start time.",
    saved: "Time log saved successfully.",
    newTaskPlaceholder: "New task name",
    taskManagerTitle: "Task management",
    taskManagerInputLabel: "Add task to list",
    taskManagerAddBtn: "Add task",
    taskEdit: "Edit",
    taskDelete: "Delete",
    noTasks: "No tasks saved yet.",
    taskAdded: "Task added successfully.",
    taskUpdated: "Task updated successfully.",
    taskDeleted: "Task deleted successfully.",
    invalidTaskName: "Task name is not valid.",
    duplicateTask: "A task with this name already exists.",
    editTaskPrompt: "New name for '{{task}}'",
    deleteTaskConfirm: "Are you sure you want to delete '{{task}}' and all related logs?",
    chartTitle: "Task comparison chart",
    chartEmpty: "Add logs to display the comparison chart.",
    chartHours: "Hours",
    timerTitle: "Live timer",
    timerTaskLabel: "Active task",
    timerStart: "Start",
    timerPause: "Pause",
    timerResume: "Resume",
    timerFinish: "Finish and save",
    timerCancel: "Cancel",
    timerRunning: "Timer is running.",
    timerPaused: "Timer paused.",
    timerCanceled: "Timer canceled.",
    timerSaved: "Time log saved from timer.",
    timerNoActive: "No active timer.",
    entryEditorTitle: "Edit time log",
    entryEditorInfo: "Task: {{task}} | Date: {{date}}",
    entryEditorSave: "Save changes",
    entryEditorCancel: "Cancel edit",
    entryUpdated: "Time log updated successfully.",
    clickToEdit: "Click any saved log to edit its time."
  }
};

const form = document.getElementById("entry-form");
const taskSelect = document.getElementById("taskSelect");
const newTaskWrap = document.getElementById("newTaskWrap");
const newTaskInput = document.getElementById("newTask");
const dateInput = document.getElementById("date");
const startInput = document.getElementById("startTime");
const endInput = document.getElementById("endTime");
const formMessage = document.getElementById("form-message");
const timerTaskSelect = document.getElementById("timerTaskSelect");
const timerNewTaskWrap = document.getElementById("timerNewTaskWrap");
const timerNewTaskInput = document.getElementById("timerNewTask");
const timerDisplay = document.getElementById("timerDisplay");
const timerStartBtn = document.getElementById("timerStartBtn");
const timerPauseBtn = document.getElementById("timerPauseBtn");
const timerFinishBtn = document.getElementById("timerFinishBtn");
const timerCancelBtn = document.getElementById("timerCancelBtn");
const timerMessage = document.getElementById("timerMessage");

const taskManagerForm = document.getElementById("task-manager-form");
const taskManagerInput = document.getElementById("taskManagerInput");
const taskManagerMessage = document.getElementById("task-manager-message");
const taskList = document.getElementById("taskList");

const langSelect = document.getElementById("langSelect");
const yearSelect = document.getElementById("yearSelect");

const weekTitle = document.getElementById("week-title");
const weekRange = document.getElementById("week-range");
const weekGrid = document.getElementById("week-grid");
const entryEditor = document.getElementById("entryEditor");
const entryEditorInfo = document.getElementById("entryEditorInfo");
const entryEditorStart = document.getElementById("entryEditorStart");
const entryEditorEnd = document.getElementById("entryEditorEnd");
const entryEditorSaveBtn = document.getElementById("entryEditorSaveBtn");
const entryEditorCancelBtn = document.getElementById("entryEditorCancelBtn");
const entryEditorMessage = document.getElementById("entryEditorMessage");
const summary = document.getElementById("summary");
const yearSummary = document.getElementById("yearSummary");

const chartCanvas = document.getElementById("taskChart");
const chartEmpty = document.getElementById("chartEmpty");

const prevWeekBtn = document.getElementById("prev-week");
const nextWeekBtn = document.getElementById("next-week");
const dayTemplate = document.getElementById("day-template");

const ISO_MONDAY = 1;
const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;

let db;
let lang = loadLang();
let activeYear = loadYear();
let tasks = [];
let yearEntries = [];
let weekStarts = [];
let currentWeekIndex = 0;
let currentEditingEntryId = "";
let timerState = {
  running: false,
  paused: false,
  taskName: "",
  startTimestamp: 0,
  elapsedMs: 0,
  intervalId: null
};

bootstrap().catch(() => {
  const text = lang === "es" ? "IndexedDB no disponible en este navegador." : "IndexedDB is not available in this browser.";
  showMessage(text, true);
});

async function bootstrap() {
  activeYear = loadYear();
  db = await openDatabase();
  await migrateLegacyEntries();

  setupYearOptions();
  await refreshDataForYear(activeYear, true);

  langSelect.value = lang;
  yearSelect.value = String(activeYear);

  applyTranslations();
  dateInput.value = getTodayOrYearStart(activeYear);

  form.addEventListener("submit", onSubmitEntry);
  taskManagerForm.addEventListener("submit", onTaskManagerSubmit);
  prevWeekBtn.addEventListener("click", () => changeWeek(-1));
  nextWeekBtn.addEventListener("click", () => changeWeek(1));
  langSelect.addEventListener("change", onLanguageChange);
  yearSelect.addEventListener("change", onYearChange);
  taskSelect.addEventListener("change", onTaskSelectionChange);
  timerTaskSelect.addEventListener("change", onTimerTaskSelectionChange);
  timerStartBtn.addEventListener("click", onTimerStart);
  timerPauseBtn.addEventListener("click", onTimerPauseResume);
  timerFinishBtn.addEventListener("click", onTimerFinish);
  timerCancelBtn.addEventListener("click", onTimerCancel);
  weekGrid.addEventListener("click", onWeekGridClick);
  entryEditorSaveBtn.addEventListener("click", onEntryEditorSave);
  entryEditorCancelBtn.addEventListener("click", closeEntryEditor);
  window.addEventListener("resize", () => drawTaskChart(yearEntries));

  renderTaskSelect();
  renderTimerTaskSelect();
  renderTaskList();
  renderTimerUI();
  renderWeek();
}

function t(key) {
  return I18N[lang][key] || key;
}

function tf(key, values = {}) {
  let value = t(key);
  for (const [k, v] of Object.entries(values)) {
    value = value.replaceAll(`{{${k}}}`, v);
  }
  return value;
}

function onLanguageChange() {
  lang = langSelect.value === "en" ? "en" : "es";
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
  renderTaskSelect();
  renderTimerTaskSelect();
  renderTaskList();
  renderTimerUI();
  renderWeek();
  clearMessage();
  clearTaskManagerMessage();
  clearTimerMessage();
  clearEntryEditorMessage();
  renderEntryEditorInfo();
}

async function onYearChange() {
  const nextYear = Number(yearSelect.value);
  if (!Number.isInteger(nextYear)) return;

  activeYear = nextYear;
  localStorage.setItem(YEAR_KEY, String(activeYear));
  await refreshDataForYear(activeYear, false);
  applyTranslations();
  closeEntryEditor();
  renderWeek();
}

function onTaskSelectionChange() {
  const isNewTask = taskSelect.value === "__new__";
  newTaskWrap.classList.toggle("hidden", !isNewTask);
  newTaskInput.required = isNewTask;
  if (isNewTask) newTaskInput.focus();
}

function onTimerTaskSelectionChange() {
  const isNewTask = timerTaskSelect.value === "__new__";
  timerNewTaskWrap.classList.toggle("hidden", !isNewTask);
  timerNewTaskInput.required = isNewTask;
  if (isNewTask) timerNewTaskInput.focus();
}

function onWeekGridClick(event) {
  const button = event.target.closest(".entry-item");
  if (!button) return;
  const entryId = button.dataset.entryId;
  if (!entryId) return;
  openEntryEditor(entryId);
}

function openEntryEditor(entryId) {
  const entry = yearEntries.find((item) => item.id === entryId);
  if (!entry) return;

  currentEditingEntryId = entryId;
  entryEditorStart.value = entry.startTime;
  entryEditorEnd.value = entry.endTime;
  clearEntryEditorMessage();
  entryEditor.classList.remove("hidden");
  renderEntryEditorInfo();
}

function closeEntryEditor() {
  currentEditingEntryId = "";
  entryEditor.classList.add("hidden");
  clearEntryEditorMessage();
}

async function onEntryEditorSave() {
  if (!currentEditingEntryId) return;
  const entry = yearEntries.find((item) => item.id === currentEditingEntryId);
  if (!entry) return;

  const nextStart = entryEditorStart.value;
  const nextEnd = entryEditorEnd.value;
  const minutes = diffMinutes(nextStart, nextEnd);
  if (!nextStart || !nextEnd) {
    showEntryEditorMessage(t("fillAll"), true);
    return;
  }
  if (minutes <= 0) {
    showEntryEditorMessage(t("endAfterStart"), true);
    return;
  }

  const updated = { ...entry, startTime: nextStart, endTime: nextEnd, minutes };
  await updateEntry(updated);

  const weekIso = weekStarts[currentWeekIndex] ? dateToIso(weekStarts[currentWeekIndex]) : "";
  await refreshDataForYear(activeYear, false);
  if (weekIso) {
    const idx = weekStarts.findIndex((d) => dateToIso(d) === weekIso);
    if (idx >= 0) currentWeekIndex = idx;
  }

  renderWeek();
  showEntryEditorMessage(t("entryUpdated"));
  renderEntryEditorInfo();
}

async function onTimerStart() {
  clearTimerMessage();
  if (timerState.running && !timerState.paused) return;

  if (!timerState.running) {
    const selectedTask = timerTaskSelect.value;
    const candidateNewTask = normalizeTaskName(timerNewTaskInput.value);
    let taskName = selectedTask;

    if (selectedTask === "__new__") {
      if (!candidateNewTask) {
        showTimerMessage(t("invalidTaskName"), true);
        return;
      }
      const result = await ensureTask(candidateNewTask);
      if (!result.ok) {
        showTimerMessage(result.reason === "duplicate" ? t("duplicateTask") : t("invalidTaskName"), true);
        return;
      }
      taskName = result.task.name;
      await refreshDataForYear(activeYear, false);
      renderTaskSelect(taskName);
      renderTimerTaskSelect(taskName);
      renderTaskList();
      renderWeek();
    }

    if (!taskName || selectedTask === "") {
      showTimerMessage(t("chooseTask"), true);
      return;
    }

    timerState.running = true;
    timerState.paused = false;
    timerState.taskName = taskName;
    timerState.elapsedMs = 0;
    timerState.startTimestamp = Date.now();
    startTimerInterval();
    showTimerMessage(t("timerRunning"));
    renderTimerUI();
    return;
  }

  if (timerState.paused) {
    timerState.paused = false;
    timerState.startTimestamp = Date.now();
    startTimerInterval();
    showTimerMessage(t("timerRunning"));
    renderTimerUI();
  }
}

function onTimerPauseResume() {
  if (!timerState.running) {
    showTimerMessage(t("timerNoActive"), true);
    return;
  }

  if (timerState.paused) {
    timerState.paused = false;
    timerState.startTimestamp = Date.now();
    startTimerInterval();
    showTimerMessage(t("timerRunning"));
  } else {
    timerState.elapsedMs += Date.now() - timerState.startTimestamp;
    timerState.paused = true;
    stopTimerInterval();
    showTimerMessage(t("timerPaused"));
  }
  renderTimerUI();
}

async function onTimerFinish() {
  if (!timerState.running) {
    showTimerMessage(t("timerNoActive"), true);
    return;
  }

  const totalMs = getCurrentTimerElapsedMs();
  const finishDate = new Date();
  const effectiveStart = new Date(finishDate.getTime() - totalMs);
  const date = dateToIso(finishDate);
  const entryYear = Number(date.slice(0, 4));

  const entry = {
    id: crypto.randomUUID(),
    task: timerState.taskName,
    date,
    year: entryYear,
    startTime: timeToHHMM(effectiveStart),
    endTime: timeToHHMM(finishDate),
    minutes: Math.max(1, Math.round(totalMs / 60000))
  };

  await addEntry(entry);
  resetTimerState();

  if (entryYear !== activeYear) {
    activeYear = entryYear;
    yearSelect.value = String(activeYear);
  }

  await refreshDataForYear(activeYear, true);
  applyTranslations();
  renderTaskSelect(entry.task);
  renderTimerTaskSelect(entry.task);
  renderTaskList();
  renderTimerUI();
  renderWeek();
  showTimerMessage(t("timerSaved"));
}

function onTimerCancel() {
  if (!timerState.running) {
    showTimerMessage(t("timerNoActive"), true);
    return;
  }
  resetTimerState();
  renderTimerUI();
  showTimerMessage(t("timerCanceled"));
}

async function onSubmitEntry(event) {
  event.preventDefault();
  clearMessage();

  const selectedTask = taskSelect.value;
  const candidateNewTask = normalizeTaskName(newTaskInput.value);
  const date = dateInput.value;
  const startTime = startInput.value;
  const endTime = endInput.value;

  let taskName = selectedTask;

  if (selectedTask === "__new__") {
    if (!candidateNewTask) {
      showMessage(t("invalidTaskName"), true);
      return;
    }
    const taskResult = await ensureTask(candidateNewTask);
    if (!taskResult.ok) {
      showMessage(taskResult.reason === "duplicate" ? t("duplicateTask") : t("invalidTaskName"), true);
      return;
    }
    taskName = taskResult.task.name;
  }

  if (!taskName || !date || !startTime || !endTime || selectedTask === "") {
    showMessage(t("fillAll"), true);
    return;
  }

  if (!isDateInYear(date, activeYear)) {
    showMessage(t("invalidYearDate"), true);
    return;
  }

  const minutes = diffMinutes(startTime, endTime);
  if (minutes <= 0) {
    showMessage(t("endAfterStart"), true);
    return;
  }

  const entry = {
    id: crypto.randomUUID(),
    task: taskName,
    date,
    year: activeYear,
    startTime,
    endTime,
    minutes
  };

  await addEntry(entry);
  await refreshDataForYear(activeYear, false);

  const entryDate = new Date(`${date}T00:00:00`);
  const entryWeekIndex = findWeekIndex(entryDate);
  if (entryWeekIndex >= 0) currentWeekIndex = entryWeekIndex;

  form.reset();
  renderTaskSelect(taskName);
  renderTimerTaskSelect(taskName);
  renderTaskList();
  dateInput.value = date;
  showMessage(t("saved"));
  renderWeek();
}

async function onTaskManagerSubmit(event) {
  event.preventDefault();
  clearTaskManagerMessage();

  const taskName = normalizeTaskName(taskManagerInput.value);
  if (!taskName) {
    showTaskManagerMessage(t("invalidTaskName"), true);
    return;
  }

  const result = await ensureTask(taskName);
  if (!result.ok) {
    showTaskManagerMessage(result.reason === "duplicate" ? t("duplicateTask") : t("invalidTaskName"), true);
    return;
  }

  await refreshDataForYear(activeYear, false);
  renderTaskSelect(result.task.name);
  renderTimerTaskSelect(result.task.name);
  renderTaskList();
  renderWeek();
  taskManagerForm.reset();
  showTaskManagerMessage(t("taskAdded"));
}

async function handleEditTask(task) {
  const input = prompt(tf("editTaskPrompt", { task: task.name }), task.name);
  if (input === null) return;

  const newName = normalizeTaskName(input);
  if (!newName) {
    showTaskManagerMessage(t("invalidTaskName"), true);
    return;
  }

  const result = await renameTask(task, newName);
  if (!result.ok) {
    showTaskManagerMessage(result.reason === "duplicate" ? t("duplicateTask") : t("invalidTaskName"), true);
    return;
  }

  if (timerState.running && timerState.taskName === task.name) {
    timerState.taskName = newName;
  }

  await refreshDataForYear(activeYear, false);
  renderTaskSelect(newName);
  renderTimerTaskSelect(newName);
  renderTaskList();
  renderTimerUI();
  renderWeek();
  showTaskManagerMessage(t("taskUpdated"));
}

async function handleDeleteTask(task) {
  const confirmed = confirm(tf("deleteTaskConfirm", { task: task.name }));
  if (!confirmed) return;

  await deleteTaskAndEntries(task);
  if (timerState.running && timerState.taskName === task.name) {
    resetTimerState();
    showTimerMessage(t("timerCanceled"));
  }
  await refreshDataForYear(activeYear, false);
  renderTaskSelect();
  renderTimerTaskSelect();
  renderTaskList();
  renderTimerUI();
  renderWeek();
  showTaskManagerMessage(t("taskDeleted"));
}

async function refreshDataForYear(year, firstLoad) {
  tasks = await getAllTasks();
  yearEntries = await getEntriesByYear(year);
  yearEntries.sort((a, b) => `${a.date}${a.startTime}`.localeCompare(`${b.date}${b.startTime}`));

  weekStarts = getAllWeekStarts(year);
  currentWeekIndex = firstLoad ? getInitialWeekIndex(year) : 0;

  configureDateInputForYear(year);
}

function applyTranslations() {
  document.title = `${t("pageTitle")} ${activeYear}`;
  document.documentElement.lang = lang;

  setText("eyebrow", t("eyebrow"));
  setText("langLabel", t("language"));
  setText("yearLabel", t("calendarYear"));
  setText("mainTitle", t("mainTitle"));
  setText("subtitle", t("subtitle"));
  setText("newEntryTitle", t("newEntry"));
  setText("taskLabel", t("task"));
  setText("newTaskLabel", t("newTask"));
  setText("dateLabel", `${t("date")} (${activeYear})`);
  setText("startLabel", t("start"));
  setText("endLabel", t("end"));
  setText("submitButton", t("submit"));
  setText("prev-week", t("prevWeek"));
  setText("next-week", t("nextWeek"));
  setText("summaryTitle", t("summary"));
  setText("yearTotalTitle", t("yearTotalTitle"));
  setText("calendarChip", `${t("calendarChip")}: ${activeYear}`);
  setText("taskManagerTitle", t("taskManagerTitle"));
  setText("taskManagerInputLabel", t("taskManagerInputLabel"));
  setText("taskManagerAddBtn", t("taskManagerAddBtn"));
  setText("chartTitle", t("chartTitle"));
  setText("chartEmpty", t("chartEmpty"));
  setText("timerTitle", t("timerTitle"));
  setText("timerTaskLabel", t("timerTaskLabel"));
  setText("timerNewTaskLabel", t("newTask"));
  setText("timerStartBtn", t("timerStart"));
  setText("timerFinishBtn", t("timerFinish"));
  setText("timerCancelBtn", t("timerCancel"));
  setText("entryEditorTitle", t("entryEditorTitle"));
  setText("entryEditorStartLabel", t("start"));
  setText("entryEditorEndLabel", t("end"));
  setText("entryEditorSaveBtn", t("entryEditorSave"));
  setText("entryEditorCancelBtn", t("entryEditorCancel"));

  newTaskInput.placeholder = t("newTaskPlaceholder");
  taskManagerInput.placeholder = t("newTaskPlaceholder");
  timerNewTaskInput.placeholder = t("newTaskPlaceholder");
  renderEntryEditorInfo();
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function renderTaskSelect(selectedTask = "") {
  fillTaskOptions(taskSelect, selectedTask || taskSelect.value);
  onTaskSelectionChange();
}

function renderTimerTaskSelect(selectedTask = "") {
  fillTaskOptions(timerTaskSelect, selectedTask || timerTaskSelect.value);
  onTimerTaskSelectionChange();
}

function fillTaskOptions(selectElement, desiredValue) {
  selectElement.innerHTML = "";

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = t("selectTask");
  selectElement.appendChild(defaultOpt);

  for (const task of tasks) {
    const opt = document.createElement("option");
    opt.value = task.name;
    opt.textContent = task.name;
    selectElement.appendChild(opt);
  }

  const newOpt = document.createElement("option");
  newOpt.value = "__new__";
  newOpt.textContent = t("createTask");
  selectElement.appendChild(newOpt);

  if (desiredValue && [...selectElement.options].some((opt) => opt.value === desiredValue)) {
    selectElement.value = desiredValue;
  } else {
    selectElement.value = "";
  }
}

function renderTimerUI() {
  const elapsedMs = getCurrentTimerElapsedMs();
  timerDisplay.textContent = formatTimerClock(elapsedMs);

  const hasTimer = timerState.running;
  const paused = timerState.paused;

  timerStartBtn.disabled = hasTimer && !paused;
  timerPauseBtn.disabled = !hasTimer;
  timerFinishBtn.disabled = !hasTimer;
  timerCancelBtn.disabled = !hasTimer;

  timerPauseBtn.textContent = paused ? t("timerResume") : t("timerPause");
}

function renderTaskList() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = t("noTasks");
    taskList.appendChild(empty);
    return;
  }

  for (const task of tasks) {
    const row = document.createElement("div");
    row.className = "task-row";

    const name = document.createElement("span");
    name.className = "task-row-name";
    name.textContent = task.name;

    const actions = document.createElement("div");
    actions.className = "task-row-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = t("taskEdit");
    editBtn.addEventListener("click", () => {
      handleEditTask(task).catch(() => showTaskManagerMessage("Error", true));
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn-danger";
    deleteBtn.textContent = t("taskDelete");
    deleteBtn.addEventListener("click", () => {
      handleDeleteTask(task).catch(() => showTaskManagerMessage("Error", true));
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    row.appendChild(name);
    row.appendChild(actions);
    taskList.appendChild(row);
  }
}

function renderWeek() {
  if (weekStarts.length === 0) return;

  const weekStart = weekStarts[currentWeekIndex];
  const weekEnd = new Date(weekStart.getTime() + 6 * DAY_MS);

  const weekNumber = getISOWeek(weekStart);
  weekTitle.textContent = `${t("week")} ${weekNumber}`;
  weekRange.textContent = `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;

  prevWeekBtn.disabled = currentWeekIndex === 0;
  nextWeekBtn.disabled = currentWeekIndex === weekStarts.length - 1;

  const dayDates = [...Array(7)].map((_, index) => new Date(weekStart.getTime() + index * DAY_MS));
  const weekEntries = getEntriesByWeek(weekStart, weekEnd);

  weekGrid.innerHTML = "";
  dayDates.forEach((dayDate) => {
    const dateIso = dateToIso(dayDate);
    const dayEntries = weekEntries.filter((entry) => entry.date === dateIso);
    const dayMinutes = dayEntries.reduce((sum, entry) => sum + entry.minutes, 0);

    const dayNode = dayTemplate.content.cloneNode(true);
    const title = dayNode.querySelector("h3");
    const list = dayNode.querySelector("ul");
    const total = dayNode.querySelector(".day-total");

    title.textContent = `${dayName(dayDate)} ${dayDate.getDate()}`;
    total.textContent = `${t("total")}: ${formatMinutes(dayMinutes)}`;

    if (dayEntries.length === 0) {
      list.innerHTML = `<li>${t("noRecords")}</li>`;
    } else {
      list.innerHTML = dayEntries
        .map((entry) => `<li><button type="button" class="entry-item" data-entry-id="${entry.id}"><strong>${escapeHtml(entry.task)}</strong>: ${entry.startTime}-${entry.endTime} (${formatMinutes(entry.minutes)})</button></li>`)
        .join("");
    }

    weekGrid.appendChild(dayNode);
  });

  renderSummary(weekEntries, summary, t("noWeekData"));
  renderSummary(yearEntries, yearSummary, t("noYearData"));
  drawTaskChart(yearEntries);

  if (currentEditingEntryId) {
    const stillExists = yearEntries.some((entry) => entry.id === currentEditingEntryId);
    if (!stillExists) {
      closeEntryEditor();
    } else {
      renderEntryEditorInfo();
    }
  }
}

function renderSummary(entries, targetNode, emptyMessage) {
  const byTask = new Map();
  for (const entry of entries) {
    byTask.set(entry.task, (byTask.get(entry.task) || 0) + entry.minutes);
  }

  targetNode.innerHTML = "";
  if (byTask.size === 0) {
    targetNode.innerHTML = `<p>${emptyMessage}</p>`;
    return;
  }

  [...byTask.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([task, minutes]) => {
      const row = document.createElement("div");
      row.className = "summary-row";
      row.innerHTML = `<span>${escapeHtml(task)}</span><strong>${formatMinutes(minutes)}</strong>`;
      targetNode.appendChild(row);
    });
}

function drawTaskChart(entries) {
  if (!chartCanvas) return;

  const byTask = new Map();
  for (const entry of entries) {
    byTask.set(entry.task, (byTask.get(entry.task) || 0) + entry.minutes);
  }

  const data = [...byTask.entries()]
    .map(([task, minutes]) => ({ task, hours: minutes / 60 }))
    .sort((a, b) => b.hours - a.hours)
    .slice(0, 12);

  const dpr = window.devicePixelRatio || 1;
  const cssWidth = chartCanvas.clientWidth || 1000;
  const cssHeight = 380;
  chartCanvas.width = Math.floor(cssWidth * dpr);
  chartCanvas.height = Math.floor(cssHeight * dpr);

  const ctx = chartCanvas.getContext("2d");
  if (!ctx) return;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  if (data.length === 0) {
    chartEmpty.textContent = t("chartEmpty");
    return;
  }

  chartEmpty.textContent = "";

  const margin = { top: 20, right: 24, bottom: 28, left: 190 };
  const plotWidth = cssWidth - margin.left - margin.right;
  const plotHeight = cssHeight - margin.top - margin.bottom;
  const maxHours = Math.max(...data.map((d) => d.hours), 1);
  const barGap = 10;
  const barHeight = Math.max(16, (plotHeight - (data.length - 1) * barGap) / data.length);

  ctx.fillStyle = "#e6f0ec";
  ctx.fillRect(margin.left, margin.top, plotWidth, plotHeight);

  data.forEach((item, index) => {
    const y = margin.top + index * (barHeight + barGap);
    const width = (item.hours / maxHours) * plotWidth;

    ctx.fillStyle = "#0f766e";
    ctx.fillRect(margin.left, y, width, barHeight);

    ctx.fillStyle = "#112018";
    ctx.font = "13px Space Grotesk, sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillText(item.task, 12, y + barHeight / 2);

    ctx.fillStyle = "#0a3d39";
    ctx.fillText(`${item.hours.toFixed(2)} h`, margin.left + width + 8, y + barHeight / 2);
  });

  ctx.fillStyle = "#38564a";
  ctx.font = "12px IBM Plex Mono, monospace";
  ctx.fillText(`${t("chartHours")}: 0`, margin.left, cssHeight - 8);
  ctx.fillText(`${t("chartHours")}: ${maxHours.toFixed(1)}`, margin.left + plotWidth - 120, cssHeight - 8);
}

function changeWeek(offset) {
  const nextIndex = currentWeekIndex + offset;
  if (nextIndex < 0 || nextIndex >= weekStarts.length) return;
  currentWeekIndex = nextIndex;
  renderWeek();
}

function getEntriesByWeek(weekStart, weekEnd) {
  const startIso = dateToIso(weekStart);
  const endIso = dateToIso(weekEnd);
  return yearEntries.filter((entry) => entry.date >= startIso && entry.date <= endIso);
}

function getInitialWeekIndex(year) {
  const today = new Date();
  if (today.getFullYear() !== year) return 0;
  const idx = findWeekIndex(today);
  return idx >= 0 ? idx : 0;
}

function getTodayOrYearStart(year) {
  const today = new Date();
  if (today.getFullYear() === year) return dateToIso(today);
  return `${year}-01-01`;
}

function findWeekIndex(date) {
  const monday = getWeekStart(date);
  const targetIso = dateToIso(monday);
  return weekStarts.findIndex((start) => dateToIso(start) === targetIso);
}

function setupYearOptions() {
  yearSelect.innerHTML = "";
  for (let year = YEAR_MAX; year >= YEAR_MIN; year--) {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    yearSelect.appendChild(option);
  }

  if (![...yearSelect.options].some((o) => Number(o.value) === activeYear)) {
    activeYear = new Date().getFullYear();
  }
}

function configureDateInputForYear(year) {
  const min = `${year}-01-01`;
  const max = `${year}-12-31`;
  dateInput.min = min;
  dateInput.max = max;

  const currentValue = dateInput.value;
  dateInput.value = isDateInYear(currentValue, year) ? currentValue : getTodayOrYearStart(year);
}

function isDateInYear(dateIso, year) {
  return typeof dateIso === "string" && dateIso >= `${year}-01-01` && dateIso <= `${year}-12-31`;
}

function getAllWeekStarts(year) {
  const jan4 = new Date(`${year}-01-04T00:00:00`);
  const firstMonday = getWeekStart(jan4);
  const starts = [];

  for (let date = new Date(firstMonday); date.getFullYear() <= year || getISOWeek(date) === 1; date = addDays(date, 7)) {
    const weekEnd = new Date(date.getTime() + 6 * DAY_MS);
    if (weekEnd.getFullYear() < year) continue;
    if (date.getFullYear() > year && getISOWeek(date) !== 1) break;
    starts.push(new Date(date));
  }

  return starts;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function getWeekStart(date) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = copy.getDay() || 7;
  copy.setDate(copy.getDate() - (day - ISO_MONDAY));
  return copy;
}

function getISOWeek(date) {
  const copy = new Date(date.getTime());
  copy.setHours(0, 0, 0, 0);
  copy.setDate(copy.getDate() + 3 - ((copy.getDay() + 6) % 7));
  const week1 = new Date(copy.getFullYear(), 0, 4);
  return 1 + Math.round(((copy - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
}

function diffMinutes(start, end) {
  const [startH, startM] = start.split(":").map(Number);
  const [endH, endM] = end.split(":").map(Number);
  return endH * 60 + endM - (startH * 60 + startM);
}

function formatMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

function normalizeTaskName(name) {
  if (typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

function loadLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "es" || saved === "en") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function loadYear() {
  const currentYear = new Date().getFullYear();
  if (currentYear < YEAR_MIN) return YEAR_MIN;
  if (currentYear > YEAR_MAX) return YEAR_MAX;
  return currentYear;
}

function showMessage(text, isError = false) {
  formMessage.textContent = text;
  formMessage.classList.toggle("error", isError);
}

function clearMessage() {
  showMessage("", false);
}

function showTaskManagerMessage(text, isError = false) {
  taskManagerMessage.textContent = text;
  taskManagerMessage.classList.toggle("error", isError);
}

function clearTaskManagerMessage() {
  showTaskManagerMessage("", false);
}

function showTimerMessage(text, isError = false) {
  timerMessage.textContent = text;
  timerMessage.classList.toggle("error", isError);
}

function clearTimerMessage() {
  showTimerMessage("", false);
}

function showEntryEditorMessage(text, isError = false) {
  entryEditorMessage.textContent = text;
  entryEditorMessage.classList.toggle("error", isError);
}

function clearEntryEditorMessage() {
  showEntryEditorMessage("", false);
}

function renderEntryEditorInfo() {
  if (!currentEditingEntryId) {
    entryEditorInfo.textContent = t("clickToEdit");
    return;
  }
  const entry = yearEntries.find((item) => item.id === currentEditingEntryId);
  if (!entry) {
    entryEditorInfo.textContent = t("clickToEdit");
    return;
  }
  entryEditorInfo.textContent = tf("entryEditorInfo", {
    task: entry.task,
    date: formatDate(new Date(`${entry.date}T00:00:00`))
  });
}

function startTimerInterval() {
  stopTimerInterval();
  timerState.intervalId = setInterval(() => {
    renderTimerUI();
  }, 1000);
}

function stopTimerInterval() {
  if (timerState.intervalId) {
    clearInterval(timerState.intervalId);
    timerState.intervalId = null;
  }
}

function resetTimerState() {
  stopTimerInterval();
  timerState = {
    running: false,
    paused: false,
    taskName: "",
    startTimestamp: 0,
    elapsedMs: 0,
    intervalId: null
  };
}

function getCurrentTimerElapsedMs() {
  if (!timerState.running) return 0;
  if (timerState.paused) return timerState.elapsedMs;
  return timerState.elapsedMs + (Date.now() - timerState.startTimestamp);
}

function formatTimerClock(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function timeToHHMM(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatDate(date) {
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function dayName(date) {
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { weekday: "long" });
}

function dateToIso(date) {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      const tx = event.target.transaction;

      let taskStore;
      if (!database.objectStoreNames.contains(TASK_STORE)) {
        taskStore = database.createObjectStore(TASK_STORE, { keyPath: "id", autoIncrement: true });
      } else {
        taskStore = tx.objectStore(TASK_STORE);
      }
      if (!taskStore.indexNames.contains("nameLower")) {
        taskStore.createIndex("nameLower", "nameLower", { unique: true });
      }

      let entryStore;
      if (!database.objectStoreNames.contains(ENTRY_STORE)) {
        entryStore = database.createObjectStore(ENTRY_STORE, { keyPath: "id" });
      } else {
        entryStore = tx.objectStore(ENTRY_STORE);
      }
      if (!entryStore.indexNames.contains("year")) {
        entryStore.createIndex("year", "year", { unique: false });
      }
      if (!entryStore.indexNames.contains("date")) {
        entryStore.createIndex("date", "date", { unique: false });
      }
      if (!entryStore.indexNames.contains("task")) {
        entryStore.createIndex("task", "task", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllTasks() {
  const tx = db.transaction(TASK_STORE, "readonly");
  const store = tx.objectStore(TASK_STORE);
  const result = await promisifyRequest(store.getAll());
  return result.sort((a, b) => a.name.localeCompare(b.name, lang === "es" ? "es" : "en"));
}

async function getTaskByLowerName(lowerName) {
  const tx = db.transaction(TASK_STORE, "readonly");
  const index = tx.objectStore(TASK_STORE).index("nameLower");
  return promisifyRequest(index.get(lowerName));
}

async function ensureTask(taskName) {
  const normalized = normalizeTaskName(taskName);
  if (!normalized) return { ok: false, reason: "invalid" };

  const nameLower = normalized.toLowerCase();
  const existing = await getTaskByLowerName(nameLower);
  if (existing) return { ok: true, task: existing, created: false };

  const tx = db.transaction(TASK_STORE, "readwrite");
  const store = tx.objectStore(TASK_STORE);
  try {
    const id = await promisifyRequest(store.add({ name: normalized, nameLower }));
    return { ok: true, task: { id, name: normalized, nameLower }, created: true };
  } catch {
    return { ok: false, reason: "duplicate" };
  }
}

async function renameTask(task, newName) {
  const normalized = normalizeTaskName(newName);
  if (!normalized) return { ok: false, reason: "invalid" };

  const lower = normalized.toLowerCase();
  if (lower !== task.nameLower) {
    const duplicate = await getTaskByLowerName(lower);
    if (duplicate) return { ok: false, reason: "duplicate" };
  }

  const txTask = db.transaction(TASK_STORE, "readwrite");
  await promisifyRequest(txTask.objectStore(TASK_STORE).put({ ...task, name: normalized, nameLower: lower }));

  const allEntries = await getAllEntries();
  const impacted = allEntries.filter((entry) => entry.task === task.name);
  if (impacted.length > 0) {
    const txEntries = db.transaction(ENTRY_STORE, "readwrite");
    const store = txEntries.objectStore(ENTRY_STORE);
    for (const entry of impacted) {
      await promisifyRequest(store.put({ ...entry, task: normalized }));
    }
  }

  return { ok: true };
}

async function deleteTaskAndEntries(task) {
  const txTask = db.transaction(TASK_STORE, "readwrite");
  await promisifyRequest(txTask.objectStore(TASK_STORE).delete(task.id));

  const allEntries = await getAllEntries();
  const impacted = allEntries.filter((entry) => entry.task === task.name);
  if (impacted.length > 0) {
    const txEntries = db.transaction(ENTRY_STORE, "readwrite");
    const store = txEntries.objectStore(ENTRY_STORE);
    for (const entry of impacted) {
      await promisifyRequest(store.delete(entry.id));
    }
  }
}

async function addEntry(entry) {
  const tx = db.transaction(ENTRY_STORE, "readwrite");
  const store = tx.objectStore(ENTRY_STORE);
  await promisifyRequest(store.put(entry));
}

async function updateEntry(entry) {
  const tx = db.transaction(ENTRY_STORE, "readwrite");
  const store = tx.objectStore(ENTRY_STORE);
  await promisifyRequest(store.put(entry));
}

async function getAllEntries() {
  const tx = db.transaction(ENTRY_STORE, "readonly");
  return promisifyRequest(tx.objectStore(ENTRY_STORE).getAll());
}

async function getEntriesByYear(year) {
  const tx = db.transaction(ENTRY_STORE, "readonly");
  const index = tx.objectStore(ENTRY_STORE).index("year");
  const entries = await promisifyRequest(index.getAll(year));
  return entries.filter(isValidEntry);
}

function isValidEntry(entry) {
  return (
    entry &&
    typeof entry.id === "string" &&
    typeof entry.task === "string" &&
    typeof entry.date === "string" &&
    typeof entry.startTime === "string" &&
    typeof entry.endTime === "string" &&
    Number.isFinite(entry.minutes) &&
    Number.isInteger(entry.year)
  );
}

async function migrateLegacyEntries() {
  const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!legacyRaw) return;

  let legacyEntries;
  try {
    legacyEntries = JSON.parse(legacyRaw);
  } catch {
    return;
  }

  if (!Array.isArray(legacyEntries) || legacyEntries.length === 0) return;

  const txCount = db.transaction(ENTRY_STORE, "readonly");
  const existingCount = await promisifyRequest(txCount.objectStore(ENTRY_STORE).count());
  if (existingCount > 0) return;

  for (const entry of legacyEntries) {
    if (!entry || typeof entry.task !== "string" || typeof entry.date !== "string") continue;

    const year = Number(entry.date.slice(0, 4));
    if (!Number.isInteger(year)) continue;

    const migrated = {
      id: typeof entry.id === "string" ? entry.id : crypto.randomUUID(),
      task: normalizeTaskName(entry.task),
      date: entry.date,
      year,
      startTime: entry.startTime,
      endTime: entry.endTime,
      minutes: Number(entry.minutes)
    };

    if (!isValidEntry(migrated)) continue;

    await ensureTask(migrated.task);
    await addEntry(migrated);
  }
}
