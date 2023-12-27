import sanityClient from '@sanity/client';
import ImageUrlBuilder  from '@sanity/image-url';


export const client = sanityClient({
    projectId:'km22c3gb',
    dataset:'production',
    apiVersion:'2023-12-10',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function saveContactFormData(formData) {
    const { fullName, email, phoneNumber, message } = formData;
  
    try {
      const result = await client.create({
        _type: 'contactMessage',
        fullName,
        email,
        phoneNumber,
        message,
      });
  
      return result;
    } catch (error) {
      console.error('Error saving data:', error);
      return null;
    }
  }