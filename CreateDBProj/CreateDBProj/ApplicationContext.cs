using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreateDBProj {
    public class ApplicationContext : DbContext {
        public DbSet<User> Users { get; set; } = null!;
		public DbSet<Course> Courses { get; set; } = null!;
		public DbSet<Module> Modules { get; set; } = null!;
		public DbSet<Enrollment> Enrollments { get; set; } = null!;
		public DbSet<CourseReview> CourseReviews { get; set; } = null!;

		public ApplicationContext() {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseMySql("server=localhost;user=root;password=724318-c;database=userdb;",
                new MySqlServerVersion(new Version(9, 4, 0)));
        }
    }
}
