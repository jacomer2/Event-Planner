namespace EventPlannerAPI.Models
{
    public class Task
    {

        public Guid Id { get; set; }

        public string Description { get; set; }

        public Boolean Check { get; set; }

        public Guid EventId { get; set; } // Foreign Key

        public Event Event { get; set; }
    }
}
