using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Property()
        {
            List<string> fruits = new() { "Villa 1", "Villa 2", "Villa 3" };
            ViewData["villa"] = fruits;
            return View();
        }
        public IActionResult Propertydetails()
        {
            string[] det = ["Pool", "Resort","Kitchen"];
            ViewData["details"] = det;
            return View();
        }
        public IActionResult Contact()
        {
            
            ViewData["result"] = "9496387725";
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
