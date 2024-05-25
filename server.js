const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static('public'));

// JSON 파싱 미들웨어
app.use(express.json());

app.post('/api/graph', (req, res) => {
    const { matrix } = req.body;
    if (!matrix) {
        return res.status(400).json({ error: 'Matrix is required' });
    }

    // 간단히 matrix를 그대로 반환
    res.json({ matrix });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
