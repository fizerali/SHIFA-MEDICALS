package com.shifamedicals.blogmanager.network

import retrofit2.Response
import retrofit2.http.*
import okhttp3.MultipartBody
import okhttp3.RequestBody

data class LoginRequest(val email: String, val password: String)
data class LoginResponse(val token: String, val user: User)
data class User(val id: String, val email: String, val role: String)

data class BlogPost(
    val _id: String? = null,
    val title: String,
    val slug: String? = null,
    val excerpt: String,
    val content: String,
    val featuredImage: ImageInfo? = null,
    val categories: List<String>,
    val author: String = "Shifa Medicals",
    val featured: Boolean = false,
    val published: Boolean = true,
    val publishedAt: String? = null,
    val readingTime: Int? = null,
    val views: Int? = null,
    val createdAt: String? = null,
    val updatedAt: String? = null
)

data class ImageInfo(
    val filename: String,
    val originalName: String,
    val mimetype: String,
    val size: Int,
    val url: String
)

data class BlogResponse(
    val blogs: List<BlogPost>,
    val totalPages: Int,
    val currentPage: Int,
    val total: Int
)

interface ApiService {
    @POST("auth/login")
    suspend fun login(@Body request: LoginRequest): Response<LoginResponse>
    
    @GET("auth/me")
    suspend fun getCurrentUser(@Header("Authorization") token: String): Response<User>
    
    @GET("blogs/admin/all")
    suspend fun getAllBlogs(
        @Header("Authorization") token: String,
        @Query("page") page: Int = 1,
        @Query("limit") limit: Int = 10
    ): Response<BlogResponse>
    
    @POST("blogs")
    suspend fun createBlog(
        @Header("Authorization") token: String,
        @Body blog: BlogPost
    ): Response<BlogPost>
    
    @PUT("blogs/{id}")
    suspend fun updateBlog(
        @Header("Authorization") token: String,
        @Path("id") id: String,
        @Body blog: BlogPost
    ): Response<BlogPost>
    
    @DELETE("blogs/{id}")
    suspend fun deleteBlog(
        @Header("Authorization") token: String,
        @Path("id") id: String
    ): Response<Map<String, String>>
    
    @Multipart
    @POST("upload/image")
    suspend fun uploadImage(
        @Header("Authorization") token: String,
        @Part image: MultipartBody.Part
    ): Response<ImageInfo>
}