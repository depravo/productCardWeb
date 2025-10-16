﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreateDBProj {
	public class Enrollment {
		[Key]
		public int Id { get; set; }
		public int UserId { get; set; }

		[ForeignKey("UserId")]
		public User? User { get; set; }
		public int CourseId { get; set; }

		[ForeignKey("CourseId")]
		public Course? Course { get; set; }
		public DateTime EnrolledAt { get; set; } = DateTime.UtcNow;
		public double? Grade { get; set; }
	}
}
