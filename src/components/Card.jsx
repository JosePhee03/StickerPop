export function Card ({ children }) {
  return (
    <section className='flex flex-col gap-4 py-4 px-8 relative m-auto top-20 rounded-lg bg-white shadow-md shadow-gray-400'>
      {children}
    </section>
  )
}
