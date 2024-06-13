import dotenv from "dotenv";
dotenv.config();
import { createClient } from "@supabase/supabase-js";
//conecting to supabase
let supabaseKey = process.env.SUPABASE_KEY
let supabaseUrl = process.env.SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)
//controller postData
export const getData = async (req, res, next) => {try {
    // Mengambil data dari tabel Supabase
    const { data, error, status, statusText } = await supabase
      .from('aadb')
      .select('arab, nama, arti');

    if (error) throw error;
    const transformedData = "Asmaul husnah"

    // Mengirim respons JSON dengan data yang telah dimodifikasi
    res.status(status).json({
      title: transformedData,
      status,
      count: data.length,
      data,
      statusText
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};
export const postData = async (req, res, next) => {
  const { nama, arab, arti } = req.body
  const db = await supabase.from('aadb').insert({ nama, arab, arti });
  res.send('data sukses di buat')
  console.log({
    nama,
    arab,
    arti
  })
}