using Microsoft.EntityFrameworkCore.Migrations;

namespace StackOverflowMock.Migrations
{
    public partial class FixedThatTypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Questions",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Questions",
                newName: "id");
        }
    }
}
