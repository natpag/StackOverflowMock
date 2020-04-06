using System;
using System.Text.Json.Serialization;

namespace StackOverflowMock.Models
{
  public class Answer
  {
    public int Id { get; set; }
    public string Comment { get; set; }
    public int Vote { get; set; }

    //navigation properties
    public int QuestionId { get; set; }

    public Question Question { get; set; }

    // public int UserId { get; set; }
  }
}