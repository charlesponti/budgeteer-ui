import axios from 'axios'

export default async (req, res) => {
  if (!(req.query.s || req.query.i)) {
    return res.status(404).json({
      message:
        'Must supply search query (`s` for title search or `i` for id search)'
    })
  }

  try {
    const response = await axios.get('http://www.omdbapi.com', {
      params: {
        apiKey: process.env.OMDB_API_KEY,
        ...req.query
      }
    })

    return res.json(response.data)
  } catch (error) {
    return res.json({ message: 'Server Error' })
  }
}
