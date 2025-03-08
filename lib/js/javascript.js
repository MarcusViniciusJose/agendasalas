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
    events: "lib/js/events.json",
    eventClick: function (info) {
      win.location.href = `https://www.sitequalquer.com.br/evento/${info.event.id}`;
    },
  });
  calendar.render();
})(window, document);
