using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAPIApp.Models;

namespace WebAPIApp.Controllers
{
    public class InitController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Init
        public ActionResult Index()
        {
            Author a = new Models.Author("Adam", "Mickiewicz");
            db.Authors.Add(a);
            a.Id = 0;       // nie trzeba dopisywac Id bo db robi to za nas
            Author b = new Models.Author("Eliza", "Orzeszkowa");
            db.Authors.Add(b);
            b.Id = 1;
            db.SaveChanges();

            return View();
        }
    }
}
