const btn = document.getElementById("btn");
const appEl = document.getElementById("app");
///////////////////////////////////////////////////////////////////
getNote().forEach((note) => {
  const noteEl = creatNodeEl(note.id, note.content);
  appEl.insertBefore(noteEl, btn);
});
///////////////////////////////////////////////////////////////////
function creatNodeEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note...";
  element.value = content;
  element.addEventListener("dbclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, content);
    }
  });
  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });
  return element;
}
///////////////////////////////////////////////////////////////////////////
function deleteNote() {}
////////////////////////////////////////////////////////////////////////////
function updateNote(id, content) {
  const notes = getNote();
  const target = notes.filter((note) => note.id === id)[0];
  target.content = content;
  saveNode(notes);
}
/////////////////////////////////////////////////////////////////////////////
function addNewNote() {
  const notes = getNote();
  const noteObj = {
    id: Math.floor(Math.random() * 10000000),
    content: "",
  };
  const noteEl = creatNodeEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btn);
  notes.push(noteObj);
  saveNode(notes);
}
/////////////////////////////////////////////////////////////////////////////
function saveNode(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}
/////////////////////////////////////////////////////////////////////////////
function getNote() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}
/////////////////////////////////////////////////////////////////////////////
btn.addEventListener("click", addNewNote);
