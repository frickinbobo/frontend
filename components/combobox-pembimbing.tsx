"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: "Anak Agung Ketut Agus Suardika, SE., SH., M.Si., Ak., CMA., BKP.",
    label: "Anak Agung Ketut Agus Suardika, SE., SH., M.Si., Ak., CMA., BKP.",
  },
  {
    value: "Dr. Cokorda Gde Bayu Putra, SE., M.Si., CMA.",
    label: "Dr. Cokorda Gde Bayu Putra, SE., M.Si., CMA.",
  },
  {
    value: "I Putu Deddy Samtika Putra, SE., M.Si., Ak., CA.",
    label: "I Putu Deddy Samtika Putra, SE., M.Si., Ak., CA.",
  },
  {
    value: "I Putu Fery Karyada, S.Pd., M.A.",
    label: "I Putu Fery Karyada, S.Pd., M.A.",
  },
  {
    value: "Dr. I Wayan Sudiana, SE., M.Si., Ak., CA.",
    label: "Dr. I Wayan Sudiana, SE., M.Si., Ak., CA.",
  },
  {
    value: "Kadek Dewi Padnyawati, SE., M.Si.",
    label: "Kadek Dewi Padnyawati, SE., M.Si.",
  },
  {
    value: "Ni Ketut Muliati, SE., M.Si.",
    label: "Ni Ketut Muliati, SE., M.Si.",
  },
  {
    value: "Ni Komang Sumadi, SE., M.Si., Ak.",
    label: "Ni Komang Sumadi, SE., M.Si., Ak.",
  },
  {
    value: "Ni Putu Ayu Kusumawati, SE., M.Si.",
    label: "Ni Putu Ayu Kusumawati, SE., M.Si.",
  },
  {
    value: "Ni Wayan Alit Erlina Wati, SE., M.Si., Ak., CA.",
    label: "Ni Wayan Alit Erlina Wati, SE., M.Si., Ak., CA.",
  },
  {
    value: "Ni Wayan Yuniasih, SE., M.Si., Ak., CA.",
    label: "Ni Wayan Yuniasih, SE., M.Si., Ak., CA.",
  },
  {
    value: "Putu Cita Ayu, SE., M.Si.",
    label: "Putu Cita Ayu, SE., M.Si.",
  },
  {
    value: "Dr. Putu Nuniek Hutnaleontina, SE., M.Si.",
    label: "Dr. Putu Nuniek Hutnaleontina, SE., M.Si.",
  },
  {
    value: "Sang Ayu Putu Arie Indraswarawati, SE., M.Si., Ak., CA.",
    label: "Sang Ayu Putu Arie Indraswarawati, SE., M.Si., Ak., CA.",
  },
  {
    value: "Ni Made Wisni Arie Pramuki, SE., MSA., Ak.",
    label: "Ni Made Wisni Arie Pramuki, SE., MSA., Ak.",
  },
  {
    value: "Ni Putu Trisna Windika Pratiwi, SE., M.Si.",
    label: "Ni Putu Trisna Windika Pratiwi, SE., M.Si.",
  },
  {
    value: "Rai Dwi Andayani W, SE., M.Si.",
    label: "Rai Dwi Andayani W, SE., M.Si.",
  },
  {
    value: "I Made Endra Lesmana Putra, SE., M.Si., Ak., CA.",
    label: "I Made Endra Lesmana Putra, SE., M.Si., Ak., CA.",
  },
  {
    value: "Ni Putu Yeni Yuliantari, S.Pd,. M.Pd.",
    label: "Ni Putu Yeni Yuliantari, S.Pd,. M.Pd.",
  },
  {
    value: "I Wayan Budi Satriya, SE., M.Si.",
    label: "I Wayan Budi Satriya, SE., M.Si.",
  },
  {
    value: "Prof. Dr. I Gede Putu Kawiana, SE., MM.",
    label: "Prof. Dr. I Gede Putu Kawiana, SE., MM.",
  },
  {
    value: "Dr. Dra. I Gusti Ayu Wimba, MM.",
    label: "Dr. Dra. I Gusti Ayu Wimba, MM.",
  },
  {
    value: "Dr. Anak Agung Ngurah Gede Sadiartha, SE., MM.",
    label: "Dr. Anak Agung Ngurah Gede Sadiartha, SE., MM.",
  },
  {
    value: "Dr. I Wayan Suartina, SE., MM.",
    label: "Dr. I Wayan Suartina, SE., MM.",
  },
  {
    value: "Dr. I Made Suasti Puja, SE., M.Fil.H.",
    label: "Dr. I Made Suasti Puja, SE., M.Fil.H.",
  },
  {
    value: "Dr. Ida Ayu Putu Widani Sugianingrat, SE., MM.",
    label: "Dr. Ida Ayu Putu Widani Sugianingrat, SE., MM.",
  },
  {
    value: "Ida Ayu Sasmita Dewi, SE., MM.",
    label: "Ida Ayu Sasmita Dewi, SE., MM.",
  },
  {
    value: "Dr. Ida I Dewa Ayu Yayati Wilyadewi, SE., MM., Ak.",
    label: "Dr. Ida I Dewa Ayu Yayati Wilyadewi, SE., MM., Ak.",
  },
  {
    value: "Dr. Made Dian Putri Agustina, SE., M.Si.",
    label: "Dr. Made Dian Putri Agustina, SE., M.Si.",
  },
  {
    value: "Dr. Mirah Ayu Putri Trarintya, SE., MM.",
    label: "Dr. Mirah Ayu Putri Trarintya, SE., MM.",
  },
  {
    value: "Ni Luh Adisti Abiyoga Wulandari, SE., MM.",
    label: "Ni Luh Adisti Abiyoga Wulandari, SE., MM.",
  },
  {
    value: "Dr. Putu Herny Susanti, SE., M.Par.",
    label: "Dr. Putu Herny Susanti, SE., M.Par.",
  },
  {
    value: "Dr. I Made Astrama, SE., MM.",
    label: "Dr. I Made Astrama, SE., MM.",
  },
  {
    value: "Dra. Putu Sri Hartati, MM.",
    label: "Dra. Putu Sri Hartati, MM.",
  },
  {
    value: "Gusti Alit Suputra, SE., MM.",
    label: "Gusti Alit Suputra, SE., MM.",
  },
  {
    value: "I Gede Aryana Mahayasa, ST., MM.",
    label: "I Gede Aryana Mahayasa, ST., MM.",
  },
  {
    value: "Dra. Ida Ayu Mashyuni, M.Si.",
    label: "Dra. Ida Ayu Mashyuni, M.Si.",
  },
  {
    value: "Gde Indra Surya Diputra, SE., M.Si.",
    label: "Gde Indra Surya Diputra, SE., M.Si.",
  },
  {
    value: "Dewa Nyoman Benni Kusyana, SE., MM.",
    label: "Dewa Nyoman Benni Kusyana, SE., MM.",
  },
  {
    value: "Ni Wayan Wina Premayani, SE., MM.",
    label: "Ni Wayan Wina Premayani, SE., MM.",
  },
  {
    value: "Luh Nik Oktarini, SE., MM.",
    label: "Luh Nik Oktarini, SE., MM.",
  },
  {
    value: "Putu Atim Purwaningrat, SE., MM.",
    label: "Putu Atim Purwaningrat, SE., MM.",
  },
  {
    value: "Gede Agus Dian Maha Yoga, SE., M.Si.",
    label: "Gede Agus Dian Maha Yoga, SE., M.Si.",
  },
  {
    value: "Milla Permata Sunny, SE., MM.",
    label: "Milla Permata Sunny, SE., MM.",
  },
  {
    value: "Komang Ary Pratiwi, SE., MM.",
    label: "Komang Ary Pratiwi, SE., MM.",
  },
  {
    value: "Dr. I Komang Gede, SE., MM.",
    label: "Dr. I Komang Gede, SE., MM.",
  },
  {
    value: "Ni Nyoman Adityarini Abiyoga Vena Swara, SE., M.Si.",
    label: "Ni Nyoman Adityarini Abiyoga Vena Swara, SE., M.Si.",
  },
  {
    value: "Ida Ayu Anggawulan Saraswathi, SE., MM.",
    label: "Ida Ayu Anggawulan Saraswathi, SE., MM.",
  },
  {
    value: "Dr. I Putu Putra Astawa, S.Kom., M.Kom.",
    label: "Dr. I Putu Putra Astawa, S.Kom., M.Kom.",
  },
  {
    value: "I Made Risma M. Arsha, S.E., M.Ec.Dev.",
    label: "I Made Risma M. Arsha, S.E., M.Ec.Dev.",
  },
  {
    value: "Putu Laksmita Dewi Rahmayanti, SE., MM.",
    label: "Putu Laksmita Dewi Rahmayanti, SE., MM.",
  },
  {
    value: "Dr. Putu Yudy Wijaya, SE., M.Si.",
    label: "Dr. Putu Yudy Wijaya, SE., M.Si.",
  },
];

export function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {selectedStatus ? (
              <>{selectedStatus.label}</>
            ) : (
              <>Pilih Pembimbing 1</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selectedStatus ? (
            <>{selectedStatus.label}</>
          ) : (
            <>Pilih Pembimbing 1</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter Pembimbing..." />
      <CommandList>
        <CommandEmpty>Tidak ada dosen pembimbing yang ditemukan.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
