import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    moviesList : [],
    filteredMovies:[],
    currentPage:1,
    singleMovieDetail:[],
    filterLanguages:[],
    appliedFilter:{
        title:'',
        language:[],
        year:''
    },
    filterHistory:[],
    isLoading : true
}

export const getMovies = createAsyncThunk('movies/getMoviesList', (page)=>{
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=${page}`)
    .then((resp) => resp.json())
    .catch((error)=>console.log(error))
});

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        resetFilters: (state) =>{
            state.filteredMovies=state.moviesList
            state.filterLanguages=[]
        },
        applyFilters: (state, payload) =>{
            state.appliedFilter=payload.payload
            state.filterLanguages=payload.payload.language
            if(state.filterHistory.length<3)
                state.filterHistory.push(payload.payload)
            else
                {
                    state.filterHistory.shift()
                    state.filterHistory.push(payload.payload)
                }
            const filteredData = state.moviesList.filter(item => {
                const { language, title, year } = payload.payload;
                return (
                  (language.length === 0 || language.some(lang => item.original_language===lang)) &&
                  (title === "" || item.title.toLowerCase().includes(title.toLowerCase())) &&
                  (year === "" || item.release_date?.split('-')?.[0] === year)
                );
              });

              state.filteredMovies=filteredData

        },
        clearHistory:(state)=>{
            state.filterHistory=[]
        },

        clearSpecificHistory:(state, payload)=>{
            state.filterHistory.splice(payload.payload,1);
        },
        applyHistoryFilter:(state, payload)=>{
            state.appliedFilter=payload.payload
            state.filterLanguages=payload.payload.language
        },
        applyFilterLanguages:(state, payload)=>{
            state.filterLanguages=payload.payload
        },
        getSingleMovieDetail:(state, payload)=>{
            const id=Number(payload.payload)
            state.isLoading=true
            const detail=state.moviesList.filter(item=>id===item.id)
            state.singleMovieDetail=detail
            state.isLoading=false
        }
    },
    extraReducers:{
        [getMovies.pending]:(state)=>{
            state.isLoading=true
        },
        [getMovies.fulfilled]:(state,action)=>{
            //console.log(action)
            state.isLoading=false
            state.moviesList=action?.payload?.results
            state.filteredMovies=action?.payload?.results
            state.currentPage=action?.payload?.page
        },
        [getMovies.rejected]:(state)=>{
            state.isLoading=false
        }
    }
})

export const { resetFilters, applyFilters, clearHistory, clearSpecificHistory, applyHistoryFilter, applyFilterLanguages, getSingleMovieDetail } = movieSlice.actions;
export default movieSlice.reducer;