using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StackOverflowMock.Models;

namespace StackOverflowMock.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AnswersController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public AnswersController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Answers
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Answer>>> GetAnswers()
    {
      return await _context.Answers.ToListAsync();
    }

    //Get: api/Answers/questionId
    [HttpGet("question/{questionId}")]
    public async Task<ActionResult<IEnumerable<Answer>>> GetAnswersForQuestion(int QuestionId)
    {
      var allAnswersForQuestion = await _context.Answers.Where(w => w.QuestionId == QuestionId).ToListAsync();

      if (allAnswersForQuestion == null)
      {
        return NotFound();
      }

      return allAnswersForQuestion;
    }

    // POST: api/Answers/
    // +1 to vote
    [HttpPost("{id}/upVote")]
    public async Task<ActionResult<Answer>> AddAnswerVote(int id)
    {
      var answer = await _context.Answers.FindAsync(id);

      if (answer == null)
      {
        return NotFound();
      }
      answer.Vote++;
      await _context.SaveChangesAsync();
      return answer;
    }

    // POST: api/Answers/
    // -1 to vote
    [HttpPost("{id}/downVote")]
    public async Task<ActionResult<Answer>> SubtractAnswerVote(int id)
    {
      var answer = await _context.Answers.FindAsync(id);

      if (answer == null)
      {
        return NotFound();
      }
      answer.Vote--;
      await _context.SaveChangesAsync();
      return answer;
    }


    // GET: api/Answers/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Answer>> GetAnswer(int id)
    {
      var answer = await _context.Answers.FindAsync(id);

      if (answer == null)
      {
        return NotFound();
      }

      return answer;
    }

    // PUT: api/Answers/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAnswer(int id, Answer answer)
    {
      if (id != answer.Id)
      {
        return BadRequest();
      }

      _context.Entry(answer).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AnswerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Answers
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("{id}")]
    public async Task<ActionResult<Answer>> PostAnswer(Answer answer)
    {
      _context.Answers.Add(answer);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetAnswer", new { id = answer.Id }, answer);
    }

    // DELETE: api/Answers/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Answer>> DeleteAnswer(int id)
    {
      var answer = await _context.Answers.FindAsync(id);
      if (answer == null)
      {
        return NotFound();
      }

      _context.Answers.Remove(answer);
      await _context.SaveChangesAsync();

      return answer;
    }

    private bool AnswerExists(int id)
    {
      return _context.Answers.Any(e => e.Id == id);
    }
  }
}
