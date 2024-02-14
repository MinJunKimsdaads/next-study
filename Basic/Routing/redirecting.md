<h2>리디렉션</h2>

<div>
  <p>리디렉션을 처리할 수 있는 5가지 방법이 있음</p>
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
