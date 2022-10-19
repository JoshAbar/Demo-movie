const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cd570e2a0f781318cb353c1f9ce2f799',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;