using EventPlannerAPI.Models;
using Microsoft.EntityFrameworkCore;
using Task = EventPlannerAPI.Models.Task;

namespace EventPlannerAPI.Data
{
    public class EventPlannerDbContext : DbContext
    {
        public EventPlannerDbContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<Event> Events { get; set; }

        public DbSet<Task> Tasks { get; set; }
    }
}
