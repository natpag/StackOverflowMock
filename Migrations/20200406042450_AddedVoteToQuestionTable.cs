using Microsoft.EntityFrameworkCore.Migrations;

namespace StackOverflowMock.Migrations
{
    public partial class AddedVoteToQuestionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Vote",
                table: "Questions",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Vote",
                table: "Questions");
        }
    }
}
