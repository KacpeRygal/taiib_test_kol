using Microsoft.AspNetCore.Mvc;
using WebApplication1.BLL;
using WebApplication1.DTOs;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyszkiController : ControllerBase
    {
        public IService _service;

        public MyszkiController(IService service)
        {
            this._service = service;
        }

        [HttpGet]
        public IEnumerable<MyszkiResponseDTO> Get()
        {
            return this._service.GetMyszkiResponseDTOs();
        }

        [HttpDelete]
        public void Delete(int id)
        {
            this._service.DeleteMysz(id);
        }

        [HttpPost]
        public void Post([FromBody] MyszkiRequestDTO myszkiRequestDTO)
        {
            this._service.PostMysz(myszkiRequestDTO);
        }
    }
}
