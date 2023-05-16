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
    }
}
