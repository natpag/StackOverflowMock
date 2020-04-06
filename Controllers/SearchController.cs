using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StackOverflowMock.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace StackOverflowMock.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {

    private DatabaseContext _context;

    public SearchController(DatabaseContext context)
    {
      _context = context;
    }



    [HttpGet("questions")]
    public async Task<ActionResult> SearchQuestions(string searchTerm)
    {
      var results = _context.Questions.Where(w =>
        w.Title.ToLower().Contains(searchTerm.ToLower()) ||
        w.Body.ToLower().Contains(searchTerm.ToLower()) ||
        w.Tags.ToLower().Contains(searchTerm.ToLower())
      //realized at this point tags should be a list and not a string, will fix later on table

      );

      return Ok(await results.ToListAsync());
    }
  }
}