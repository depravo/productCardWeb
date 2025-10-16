using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreateDBProj {
	public class Module {
		[Key]
		public int Id { get; set; }
		
		[Required]
		public string Title { get; set; }
		public int OrderNumber {  get; set; }
		public int CourseId { get; set; }

		[ForeignKey("CourseId")]
		public Course? Course { get; set; }
	}
}
