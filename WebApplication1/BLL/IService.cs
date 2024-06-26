using WebApplication1.DTOs;

namespace WebApplication1.BLL
{
    public interface IService
    {
        IEnumerable<MyszkiResponseDTO> GetMyszkiResponseDTOs();
        void DeleteMysz(int id);
        void PostMysz(MyszkiRequestDTO myszRequestDTO);
    }
}
