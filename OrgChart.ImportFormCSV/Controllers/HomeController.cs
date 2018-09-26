using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OrgChart.ImportFormCSV.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Read()
        {
            var path = Server.MapPath("/App_Data/OrgChart.csv");

            var csv = new List<string[]>();
            var lines = System.IO.File.ReadAllLines(path);
            foreach (string line in lines)
                csv.Add(line.Split(','));

            string json = new
                System.Web.Script.Serialization.JavaScriptSerializer().Serialize(csv);

            return Json(json, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Write()
        {
            var path = Server.MapPath("/App_Data/OrgChart.csv");

            for (int i = 0; i < Request.Files.Count; i++)
            {
                var file = Request.Files[i];
                var fileName = Path.GetFileName(file.FileName);
                file.SaveAs(path);
            }

            var csv = new List<string[]>();
            var lines = System.IO.File.ReadAllLines(path);
            foreach (string line in lines)
                csv.Add(line.Split(','));

            string json = new
                System.Web.Script.Serialization.JavaScriptSerializer().Serialize(csv);

            return Json(json, JsonRequestBehavior.AllowGet);
        }
    }
}