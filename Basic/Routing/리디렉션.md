<h2>리디렉션</h2>

<div>
  <p>리디렉션을 처리할 수 있는 방법이 있음</p>
</div>

<div>
  <p>1. redirect</p>
    
    'use server'
 
    import { redirect } from 'next/navigation'
     
    export async function createPost(id: string) {
      try {
        // Call database
      } catch (error) {
        // Handle errors
      }

      redirect(`/post/${id}`) // Navigate to the new post page
    }
    
</div>

<div>
  <p>2. permanentRedirect</p>

    'use server'
   
    import { permanentRedirect } from 'next/navigation'
     
    export async function updateUsername(username: string, formData: FormData) {
      try {
        // Call database
      } catch (error) {
        // Handle errors
      }
     
      permanentRedirect(`/profile/${username}`) // Navigate to the new user profile
    }
    
</div>

<div>
  <p>3. useRouter()</p>
  
    'use client'
   
    import { useRouter } from 'next/navigation'
     
    export default function Page() {
      const router = useRouter()
     
      return (
        <button type="button" onClick={() => router.push('/dashboard')}>
          Dashboard
        </button>
      )
    }
    
</div>
