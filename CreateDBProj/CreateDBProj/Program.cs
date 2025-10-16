using CreateDBProj;
using Microsoft.EntityFrameworkCore;
using System;

using (ApplicationContext db = new ApplicationContext()) {
	var users = new List<User>
		{
			new User
			{
				FirstName = "Алексей",
				LastName = "Иванов",
				Email = "alexey.ivanov@example.com",
				RegisteredAt = DateTime.UtcNow.AddDays(-30)
			},
			new User
			{
				FirstName = "Мария",
				LastName = "Петрова",
				Email = "maria.petrova@example.com",
				RegisteredAt = DateTime.UtcNow.AddDays(-25)
			},
			new User
			{
				FirstName = "Сергей",
				LastName = "Сидоров",
				Email = "sergey.sidorov@example.com",
				RegisteredAt = DateTime.UtcNow.AddDays(-20)
			},
			new User
			{
				FirstName = "Анна",
				LastName = "Кузнецова",
				Email = "anna.kuznetsova@example.com",
				RegisteredAt = DateTime.UtcNow.AddDays(-15)
			},
			new User
			{
				FirstName = "Дмитрий",
				LastName = "Преподавателев",
				Email = "dmitry.teacher@example.com",
				RegisteredAt = DateTime.UtcNow.AddDays(-40)
			}
		};

	db.Users.AddRange(users);
	db.SaveChanges();

	var courses = new List<Course>
	   {
			new Course
			{
				Title = "Основы C# и .NET",
				Description = "Полный курс по основам языка C# и платформы .NET для начинающих разработчиков.",
				Price = 1490.0
			},
			new Course
			{
				Title = "Entity Framework Core",
				Description = "Изучение ORM Entity Framework Core для работы с базами данных в .NET приложениях.",
				Price = 1890.0
			},
			new Course
			{
				Title = "ASP.NET Core Web API",
				Description = "Создание RESTful API с использованием ASP.NET Core и современных практик разработки.",
				Price = 2190.0
			}
		};
	db.Courses.AddRange(courses);
	db.SaveChanges();

	var random = new Random();
	var enrollments = new List<Enrollment>();

	foreach (var student in users) {
		foreach (var course in courses) {
			if (random.Next(0, 2) == 1) {
				enrollments.Add(new Enrollment {
					UserId = student.Id,
					CourseId = course.Id,
					EnrolledAt = DateTime.UtcNow.AddDays(-random.Next(1, 20)),
					Grade = random.Next(3, 6)
				});
			}
		}
	}

	db.Enrollments.AddRange(enrollments);
	db.SaveChanges();

	var modules = new List<Module>();

	foreach (var course in courses) {
		if (course.Title.Contains("C#")) {
			var parentModules = new List<Module>
			{
					new Module { Title = "Введение в C#", OrderNumber = 1, CourseId = course.Id },
					new Module { Title = "Основы программирования", OrderNumber = 2, CourseId = course.Id },
					new Module { Title = "ООП в C#", OrderNumber = 3, CourseId = course.Id }
				};

			modules.AddRange(parentModules);

		} else if (course.Title.Contains("Entity Framework")) {
			modules.AddRange(new[]
			{
					new Module { Title = "Введение в EF Core", OrderNumber = 1, CourseId = course.Id },
					new Module { Title = "Модели данных", OrderNumber = 2, CourseId = course.Id },
					new Module { Title = "Миграции", OrderNumber = 3, CourseId = course.Id },
					new Module { Title = "LINQ запросы", OrderNumber = 4, CourseId = course.Id }
				});
		} else if (course.Title.Contains("Web API")) {
			modules.AddRange(new[]
			{
					new Module { Title = "Основы REST", OrderNumber = 1, CourseId = course.Id },
					new Module { Title = "Контроллеры", OrderNumber = 2, CourseId = course.Id },
					new Module { Title = "Middleware", OrderNumber = 3, CourseId = course.Id },
					new Module { Title = "Аутентификация и авторизация", OrderNumber = 4, CourseId = course.Id }
				});
		}
	}

	db.Modules.AddRange(modules);
	db.SaveChanges();

	var reviews = new List<CourseReview>();
	foreach (var enrollment in enrollments) {
		reviews.Add(new CourseReview {
			UserId = enrollment.UserId,
			CourseId = enrollment.CourseId,
			Rating = random.Next(4, 6), 
			Comment = GetRandomReviewComment(enrollment.Course.Title),
			CreatedAt = enrollment.EnrolledAt.AddDays(random.Next(1, 10))
		});
	}

	db.CourseReviews.AddRange(reviews);
	db.SaveChanges();
}

string GetRandomReviewComment(string courseTitle) {
	var comments = new[]
	{
			$"Отличный курс '{courseTitle}'! Очень понятно объясняют материал.",
			$"Курс '{courseTitle}' превзошел мои ожидания. Рекомендую!",
			$"Благодаря курсу '{courseTitle}' смог разобраться в сложных темах.",
			$"Преподаватель курса '{courseTitle}' очень доступно объясняет сложные концепции.",
			$"Практические задания в курсе '{courseTitle}' очень полезны для закрепления материала."
		};

	var random = new Random();
	return comments[random.Next(comments.Length)];
}
