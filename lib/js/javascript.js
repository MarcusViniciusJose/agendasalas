(function (win, doc) {
  let calendarEl = doc.querySelector(".calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "pt-br",
    headerToolbar: {
      start: "prev, next, today",
      center: "title",
      end: "dayGridMonth, timeGridWeek, timeGridDay",
    },
    dateClick: function (info) {
      alert("Clicked on: " + info.dateStr);
      alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
      alert("Current view: " + info.view.type);
      info.dayEl.style.backgroundColor = "red";
    },
    events: [
      {
        title: "The Title",
        start: "2025-03-05",
        end: "2025-03-06",
      },
      {
        title: "The Title 2",
        start: "2025-03-07",
        end: "2025-03-09",
      },
    ],
  });
  calendar.render();
})(window, document);
