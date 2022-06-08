const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '421f675b1c7ca831dde337d7d124ee05',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;