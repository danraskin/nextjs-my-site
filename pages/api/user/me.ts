export default function handler(req, res) {
    // have to specify desired METHOD
    // if (req.method === 'POST') {
        res.json({ data: {me: true}})
    // }
}