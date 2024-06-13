import dotenv from "dotenv";
dotenv.config();
import { createClient } from "@supabase/supabase-js";
//conecting to supabase
let supabaseKey = process.env.SUPABASE_KEY
let supabaseUrl = process.env.SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)
//controller postData
export const getData = async (req, res, next) => {
  const db = await supabase.from('aadb').select()
  res.json({
    db
  })
  console.log({db})
}
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