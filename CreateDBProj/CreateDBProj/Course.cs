using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreateDBProj {
	public class Course {
		[Key]
		public int Id { get; set; }
		[Required]
		[MaxLength(100)]
		public string Title { get; set; }
		public string Description { get; set; }
		public double Price { get; set; }
		public ICollection<CourseReview> courseReviews { get; set; } = new List<CourseReview>();
		public ICollection<Module> Modules { get; set; } = new List<Module>();
		public ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();

	}
}
