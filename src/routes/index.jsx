import { AllPages } from '@pages/all-pages/all-pages'
import { GithubPage } from '@pages/github'
import { HomePage } from '@pages/home-page/home-page'
import { LinkedInPage } from '@pages/linkedIn'
import { TwitterPage } from '@pages/twitter'
import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './error-page'
import { Root } from './root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'twitter',
        element: <TwitterPage />
      },
      {
        path: 'github',
        element: <GithubPage />
      },
      {
        path: 'linkedIn',
        element: <LinkedInPage />
      }
    ]
  },
  {
    path: 'all-pages',
    element: <AllPages />
  }
])
