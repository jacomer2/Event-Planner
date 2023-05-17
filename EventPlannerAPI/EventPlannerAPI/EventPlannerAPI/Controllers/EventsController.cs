using EventPlannerAPI.Data;
using EventPlannerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventPlannerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        private readonly EventPlannerDbContext _eventPlannerDbContext;

        public EventsController(EventPlannerDbContext eventPlannerDbContext)
        {
            _eventPlannerDbContext = eventPlannerDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await _eventPlannerDbContext.Events.ToListAsync();

            return Ok(events);
        }

        [HttpPost]
        public async Task<IActionResult> AddEvent([FromBody] Event eventRequest)
        {
            eventRequest.Id = Guid.NewGuid();

            await _eventPlannerDbContext.Events.AddAsync(eventRequest);
            await _eventPlannerDbContext.SaveChangesAsync();

            return Ok(eventRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEvent([FromRoute] Guid id)
        {
           var eventret = 
            await _eventPlannerDbContext.Events.FirstOrDefaultAsync(x => x.Id == id);

            if (eventret == null)
            {
                return NotFound();
            }

            return Ok(eventret);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEvent([FromRoute] Guid id, Event updateEventRequest)
        {
            var eventup = await _eventPlannerDbContext.Events.FindAsync(id);

            if (eventup == null)
            {
                return NotFound();
            }

            eventup.Name = updateEventRequest.Name;
            eventup.Description = updateEventRequest.Description;
            eventup.Date = updateEventRequest.Date;
            eventup.Street = updateEventRequest.Street;
            eventup.City = updateEventRequest.City;            eventup.Name = updateEventRequest.Name;
            eventup.State = updateEventRequest.State;
            eventup.ZipCode = updateEventRequest.ZipCode;

            await _eventPlannerDbContext.SaveChangesAsync();

            return Ok(eventup);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEvent([FromRoute] Guid id)
        {
            var eventdel = await _eventPlannerDbContext.Events.FindAsync(id);

            if (eventdel == null)
            {
                return NotFound();
            }

            _eventPlannerDbContext.Events.Remove(eventdel);
            await _eventPlannerDbContext.SaveChangesAsync();

            return Ok(eventdel);
        }

    }


}
