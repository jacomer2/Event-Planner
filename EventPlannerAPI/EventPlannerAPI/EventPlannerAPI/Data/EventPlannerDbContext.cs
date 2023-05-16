using EventPlannerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EventPlannerAPI.Data
{
    public class EventPlannerDbContext : DbContext
    {
        public EventPlannerDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Event> Events { get; set; }
    }
}
