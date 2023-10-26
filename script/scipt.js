function generateTimeline(events) {
    let timelineHtml = '';
    events.forEach(event => {
      timelineHtml += `
        <div class="timeline-event">
          <div class="timeline-date">${event.date}</div>
          <div class="timeline-content">
            <h3 class="timeline-title">${event.title}</h3>
            <p class="timeline-description">${event.description}</p>
          </div>
        </div>
      `;
    });
    return timelineHtml;
  }
  
  const events = [
    { date: '2010-2014', title: 'Bachelor of Science in Computer Science', description: 'University of XYZ' },
    { date: '2014-2016', title: 'Software Engineer', description: 'ABC Company' },
    { date: '2016-2020', title: 'Senior Software Engineer', description: 'DEF Company' },
  ];
  
  const timelineContainer = document.getElementById('timeline-container');
  timelineContainer.innerHTML = generateTimeline(events);
  
  // Get all the timeline events
  const timelineEvents = document.querySelectorAll('.timeline-event');
  
  // Create a new Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the timeline event is in view, add the "show" class to animate it
        entry.target.classList.add('show');
      } else {
        // If the timeline event is not in view, remove the "show" class
        entry.target.classList.remove('show');
      }
    });
  });
  
  // Observe each timeline event
  timelineEvents.forEach(event => {
    observer.observe(event);
  });