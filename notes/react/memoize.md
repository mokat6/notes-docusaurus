# Memoize

Never memoize data from the loader. It is already stable, each time you access it from the useLoaderData()

unless you make some heavy calculations, and want to memoize that. Or just make calculations, and want to pass this new object down to child components

do not mutate the loader data. It might be used by other components on the same route.
Think of it as read-only server state
