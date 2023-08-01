using System.ComponentModel.DataAnnotations.Schema;

namespace EventPlannerAPI.Models
{
    public class Event
    {

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public long ZipCode { get; set; }

        [ForeignKey("EventId")] // Add this attribute
        public ICollection<Task> Tasks { get; set; }


    }
}
