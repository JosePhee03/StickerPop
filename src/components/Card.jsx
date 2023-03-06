export function Card ({ children }) {
  return (
    <section className='flex flex-col z-10 gap-4 mt-24 py-10 px-8 rounded-lg bg-white shadow-lg shadow-gray-200'>
      {children}
    </section>
  )
}
