package com.shifamedicals.blogmanager.repository

import com.shifamedicals.blogmanager.network.*
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class BlogRepository @Inject constructor(
    private val apiService: ApiService
) {
    suspend fun login(email: String, password: String) = 
        apiService.login(LoginRequest(email, password))
    
    suspend fun getAllBlogs(token: String, page: Int = 1) = 
        apiService.getAllBlogs("Bearer $token", page)
    
    suspend fun createBlog(token: String, blog: BlogPost) = 
        apiService.createBlog("Bearer $token", blog)
    
    suspend fun updateBlog(token: String, id: String, blog: BlogPost) = 
        apiService.updateBlog("Bearer $token", id, blog)
    
    suspend fun deleteBlog(token: String, id: String) = 
        apiService.deleteBlog("Bearer $token", id)
    
    suspend fun uploadImage(token: String, imagePart: okhttp3.MultipartBody.Part) = 
        apiService.uploadImage("Bearer $token", imagePart)
}