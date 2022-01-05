import axios from "axios";
import React from "react";

const api = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export const insertMovie = (payload) => {
  return api.post(`/movie`, payload);
};

export const getAllMovies = () => {
  return api.get(`/movies`);
};

export const updateMovieById = (id, payload) => {
  return api.put(`/movie/${id}`, payload);
};

export const deleteMovieById = (id) => {
  return api.delete(`/movie/${id}`);
};

export const getMovieById = (id) => {
  return api.get(`/movie/${id}`);
};

const apis = {
  insertMovie,
  getAllMovies,
  updateMovieById,
  deleteMovieById,
  getMovieById,
};

export default apis;
