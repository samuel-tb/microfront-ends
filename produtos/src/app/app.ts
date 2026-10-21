import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  produtos: Produto[] = [

    {
      nome: 'Teclado Magnético Gamer Attack Shark X82 HE',
      valor: 309.99,
      imagem: 'https://images.kabum.com.br/produtos/fotos/904399/teclado-magnetico-gamer-attack-shark-x82-he-75-rapid-trigger-8000hz-0-01ms-starlight-white-branco-as-x82he-sl_1772799304_gg.jpg'
    },
    {
      nome: 'Console Sony PlayStation 5, SSD 825GB, Controle Sem Fio DualSense + 2 Jogos Digitais, Edição Digital',
      valor: 4499.99,
      imagem: 'https://images.kabum.com.br/produtos/fotos/989702/console-sony-playstation-5-ssd-825gb-controle-sem-fio-dualsense-2-jogos-digitais-edicao-digital_1765487654_gg.jpg'       
    },
    {
      nome: 'Monitor Gamer ASUS TUF Gaming Series 5, 27", Full HD, Fast IPS, 260Hz, 0.3ms, HDR10, FreeSync, Preto',
      valor: 999.99,
      imagem: 'https://images.kabum.com.br/produtos/fotos/1017202/monitor-gamer-asus-tuf-gaming-series-5-vg279qm5f-27-full-hd-fast-ips-260hz-0-3ms-hdr10-freesync-preto-vg279qm5f_1788206965_gg.jpg'
    },
    {
      nome: 'Processador AMD Ryzen 7 5800X3D',
      valor: 2045.99,
      imagem: 'https://images.kabum.com.br/produtos/fotos/1053828/processador-amd-ryzen-7-5800x3d-3-4ghz-8-core-cache-100mb-am4-100-100000651pof_1784051518_gg.jpg'
    },
    {
      nome: 'Placa de Vídeo ASUS PRIME RTX 5070 OC 12G WHITE NVIDIA Geforce, 12GB, GDDR7, OpenGL 4.6, 2587 MHz, Triple Fan, DLSS 4',
      valor: 5599.99,
      imagem: 'https://images.kabum.com.br/produtos/fotos/870970/placa-de-video-asus-prime-rtx-5070-oc-12g-white-nvidia-geforce-12gb-gddr7-opengl-4-6-2587-mhz-triple-fan-dlss-4-90yv0m19-m0na00_1750943794_gg.jpg'
    },
    {
      nome: 'Volante Logitech PRO WHEEL para PS5, PS4 e PC',
      valor: 9189.90,
      imagem: 'https://images.kabum.com.br/produtos/fotos/701098/volante-logitech-pro-wheel-para-ps5-ps4-e-pc-941-000176_1779903008_gg.jpg'
    },
    {
      nome: 'Headset Gamer Sem Fio Redragon Zeus Pro',
      valor: 329.99,
      imagem: 'https://images.kabum.com.br/produtos/fotos/508106/headset-gamer-redragon-zeus-pro-preto-h510-pro_1700743328_gg.jpg'
    }
  ];
}
