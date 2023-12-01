<script setup>
import { ref } from 'vue'
import axios from 'axios'
const jenis = ref('')
const nim = ref('')
const nama = ref('')
const prodi = ref('')
const pembimbing_1 = ref('')
const pembimbing_2 = ref('')
const judul = ref('')
const nomor_surat = ref('')
const tanggal_surat = ref('')

async function handleSubmit(e) {
	const data = {
		'nim': nim.value,
		'nama': nama.value,
		'prodi': prodi.value,
		'pembimbing_1': pembimbing_1.value,
		'pembimbing_2': pembimbing_2.value,
		'judul': judul.value,
		'nomor_surat': nomor_surat.value,
		'tanggal_surat': tanggal_surat.value
	}

	await axios.post('http://localhost:8000/api/post/dosen', data).then((e) => { console.log(e) })
}
</script>
<template>
	<v-container fill-height>
		<v-layout class="">
			<v-card class="w-100 ma-2 ma-sm-4">
				<v-form @submit.prevent="handleSubmit">
					<v-card-title class="ms-4 mt-8">
						<h3>Input Kartu Bimbingan</h3>
					</v-card-title>
					<v-card-item>
						<v-container fill-height>
							<v-row no-gutters>
								<v-col>
									<v-select v-model="jenis" label="Pilih jenis kartu" :items="['Putih', 'Kuning']"
										density="comfortable" clearable required></v-select>
								</v-col>
							</v-row>
							<v-row no-gutters>
								<v-col cols="12" sm="6">
									<v-text-field v-model="nim" class="me-sm-2" label="NIM mahasiswa" density="comfortable"
										type="number" clearable required></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field v-model="nama" class="ms-sm-2" label="Nama mahasiswa" type="text"
										density="comfortable" clearable required></v-text-field>
								</v-col>
							</v-row>
							<v-row no-gutters>
								<v-col>
									<v-select v-model="prodi" label="Prodi Mahasiswa" :items="['Akuntansi', 'Manajemen']"
										density="comfortable" clearable required></v-select>
								</v-col>
							</v-row>
							<v-row no-gutters>
								<v-col cols="12" sm="6">
									<v-autocomplete v-model="pembimbing_1" class="me-sm-2" label="Pembimbing 1"
										:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
										density="comfortable" auto-select-first clearable required></v-autocomplete>
								</v-col>
								<v-col cols="12" sm="6">
									<v-autocomplete v-model="pembimbing_2" class="ms-sm-2" label="Pembimbing 2"
										:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
										density="comfortable" auto-select-first clearable required></v-autocomplete>
								</v-col>
							</v-row>
							<v-row no-gutters>
								<v-col>
									<v-textarea v-model="judul" label="Judul Proposal/Skripsi" density="comfortable"
										rows="1" auto-grow clearable required></v-textarea>
								</v-col>
							</v-row>
							<v-row no-gutters>
								<v-col cols="12" sm="6">
									<v-text-field v-model="nomor_surat" class="me-sm-2" label="Nomor surat" type="number"
										density="comfortable" clearable required></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field v-model="tanggal_surat" class="ms-sm-2" label="Tanggal surat" type="date"
										density="comfortable" clearable required></v-text-field>
								</v-col>
							</v-row>
						</v-container>
					</v-card-item>
					<v-card-action class="d-flex flex-row-reverse">
						<v-btn class="bg-primary me-8 mb-8" type="submit">Submit</v-btn>
						<v-btn class="mx-4 mb-4">Clear</v-btn>
					</v-card-action>
				</v-form>
			</v-card>
		</v-layout>
	</v-container>
</template>

