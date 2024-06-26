using WebApplication1.DTOs;
using WebApplication1.Model;

namespace WebApplication1.BLL
{
    public class Service : IService
    {
        static List<Myszki> MyszkiList = new()
        {
            new Myszki {Id=1,Model="Mysz1",DPI=12},
            new Myszki {Id=2,Model="Mysz2",DPI=41 },
            new Myszki {Id=3,Model="Mysz3",DPI=90 }
        };
        public void DeleteMysz(int id)
        {
            foreach(Myszki m in MyszkiList)
            {
                if(m.Id == id)
                {
                    MyszkiList.Remove(m);
                    break;
                }
            }
            //throw new Exception($"Nie znaleziono myszki o id = {id}");
        }

        public IEnumerable<MyszkiResponseDTO> GetMyszkiResponseDTOs()
        {
            return MyszkiList.Select(x => ToMyszkiResponseDTO(x));
        }

        public void PostMysz(MyszkiRequestDTO myszRequestDTO)
        {
            Myszki myszkiDodana = new()
            {
                Id = MyszkiList.Max(x => x.Id) + 1,
                Model = myszRequestDTO.Model,
                DPI = myszRequestDTO.DPI
            };
            MyszkiList.Add(myszkiDodana);
        }

        MyszkiResponseDTO ToMyszkiResponseDTO(Myszki mysz)
        {
            return new MyszkiResponseDTO
            {
                Id = mysz.Id,
                Model = mysz.Model,
                DPI = mysz.DPI
            };
        }
    }
}
