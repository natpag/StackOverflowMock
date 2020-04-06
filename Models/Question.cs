using System;
using System.Collections.Generic;


namespace StackOverflowMock.Models
{
  public class Question
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Body { get; set; }
    public string Tags { get; set; }

    //navigation properties
    public List<Answer> Answers { get; set; } = new List<Answer>();

    //public int UserId { get; set; }
    //public User User { get; set; }

  }
}