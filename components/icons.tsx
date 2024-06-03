"use client"

import {
  LucideProps,
  Moon,
  SunMedium,
  Linkedin,
  type Icon as LucideIcon,
} from "lucide-react"
import { Logo } from "@/components/logo";

import { useTheme } from "next-themes"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  soundcloud: (props: LucideProps) => (
    <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 300 300">
<g id="XMLID_526_">
	<path id="XMLID_527_" d="M14.492,208.896c0.619,0,1.143-0.509,1.232-1.226l3.365-26.671l-3.355-27.278
		c-0.1-0.717-0.623-1.23-1.242-1.23c-0.635,0-1.176,0.524-1.26,1.23l-2.941,27.278l2.941,26.662
		C13.316,208.377,13.857,208.896,14.492,208.896z"/>
	<path id="XMLID_530_" d="M3.397,198.752c0.608,0,1.101-0.473,1.19-1.18l2.608-16.574l-2.608-16.884
		c-0.09-0.685-0.582-1.18-1.19-1.18c-0.635,0-1.127,0.495-1.217,1.19L0,180.999l2.18,16.569
		C2.27,198.269,2.762,198.752,3.397,198.752z"/>
	<path id="XMLID_531_" d="M27.762,148.644c-0.08-0.867-0.715-1.5-1.503-1.5c-0.782,0-1.418,0.633-1.491,1.5l-2.811,32.355
		l2.811,31.174c0.073,0.862,0.709,1.487,1.491,1.487c0.788,0,1.423-0.625,1.503-1.487l3.18-31.174L27.762,148.644z"/>
	<path id="XMLID_532_" d="M38.152,214.916c0.922,0,1.668-0.759,1.758-1.751l3.005-32.156l-3.005-33.258
		c-0.09-0.999-0.836-1.749-1.758-1.749c-0.935,0-1.692,0.751-1.756,1.754l-2.656,33.253l2.656,32.156
		C36.46,214.158,37.217,214.916,38.152,214.916z"/>
	<path id="XMLID_533_" d="M50.127,215.438c1.074,0,1.936-0.86,2.025-2.011l-0.01,0.008l2.83-32.426l-2.83-30.857
		c-0.08-1.132-0.941-2.005-2.016-2.005c-1.09,0-1.947,0.873-2.012,2.014l-2.502,30.849l2.502,32.418
		C48.18,214.578,49.037,215.438,50.127,215.438z"/>
	<path id="XMLID_534_" d="M67.132,181.017l-2.655-50.172c-0.074-1.272-1.065-2.286-2.281-2.286c-1.207,0-2.195,1.013-2.269,2.286
		l-2.35,50.172l2.35,32.418c0.074,1.278,1.063,2.278,2.269,2.278c1.217,0,2.207-1,2.281-2.278v0.009L67.132,181.017z"/>
	<path id="XMLID_535_" d="M74.386,215.766c1.339,0,2.45-1.111,2.513-2.529v0.021l2.482-32.233l-2.482-61.656
		c-0.063-1.418-1.174-2.529-2.513-2.529c-1.37,0-2.471,1.111-2.545,2.529l-2.185,61.656l2.195,32.222
		C71.915,214.655,73.016,215.766,74.386,215.766z"/>
	<path id="XMLID_536_" d="M86.645,111.435c-1.508,0-2.725,1.238-2.787,2.799l-2.033,66.801l2.033,31.884
		c0.063,1.553,1.279,2.783,2.787,2.783c1.504,0,2.73-1.22,2.783-2.788v0.016l2.307-31.895l-2.307-66.801
		C89.375,112.663,88.148,111.435,86.645,111.435z"/>
	<path id="XMLID_782_" d="M99.01,215.766c1.656,0,2.975-1.336,3.037-3.056v0.019l2.133-31.693l-2.133-69.045
		c-0.063-1.714-1.381-3.056-3.037-3.056c-1.666,0-3.005,1.342-3.031,3.056l-1.916,69.045l1.916,31.693
		C96.005,214.43,97.344,215.766,99.01,215.766z"/>
	<path id="XMLID_783_" d="M111.477,215.734c1.787,0,3.237-1.463,3.291-3.318v0.029l1.963-31.404l-1.963-67.289
		c-0.054-1.854-1.504-3.311-3.291-3.311c-1.8,0-3.25,1.456-3.303,3.311l-1.725,67.289l1.736,31.389
		C108.227,214.271,109.677,215.734,111.477,215.734z"/>
	<path id="XMLID_784_" d="M129.359,181.041l-1.777-64.836c-0.043-2-1.609-3.571-3.551-3.571c-1.947,0-3.514,1.571-3.555,3.584
		l-1.594,64.823l1.594,31.198c0.041,1.984,1.607,3.556,3.555,3.556c1.941,0,3.508-1.572,3.551-3.585v0.029L129.359,181.041z"/>
	<path id="XMLID_785_" d="M136.682,215.853c2.064,0,3.773-1.717,3.805-3.828v0.017l1.613-30.984l-1.613-77.153
		c-0.031-2.119-1.74-3.833-3.805-3.833c-2.063,0-3.767,1.722-3.809,3.844l-1.434,77.111l1.434,31.016
		C132.915,214.136,134.619,215.853,136.682,215.853z"/>
	<path id="XMLID_786_" d="M149.291,92.814c-2.229,0-4.037,1.849-4.074,4.103l-1.667,84.151l1.677,30.526
		c0.027,2.225,1.836,4.068,4.064,4.068c2.195,0,4.037-1.844,4.047-4.105v0.037l1.82-30.526l-1.82-84.151
		C153.328,94.655,151.486,92.814,149.291,92.814z"/>
	<path id="XMLID_787_" d="M160.82,215.882c0.09,0.008,101.623,0.056,102.275,0.056c20.385,0,36.904-16.722,36.904-37.357
		c0-20.624-16.52-37.349-36.904-37.349c-5.059,0-9.879,1.034-14.275,2.907c-2.922-33.671-30.815-60.077-64.842-60.077
		c-8.318,0-16.429,1.662-23.593,4.469c-2.788,1.09-3.534,2.214-3.556,4.392v118.539C156.861,213.752,158.607,215.655,160.82,215.882
		z"/>
</g>
</svg>
  ),
  linkedin: Linkedin,
  trailhead: (props: LucideProps) => (
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" 
        width="800px" height="800px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" {...props}>
      <g>
        <polygon points="32.7,63.8 29.5,67.5 35.9,67.5 	"/>
        <polygon points="35.7,71.4 42.1,71.4 38.9,67.7 	"/>
        <polygon points="61.3,68.8 64.5,65.1 67.7,68.8 	"/>
        <g>
          <path d="M50.9,20.2c-0.5-0.3-1.2-0.3-1.7,0C31.3,27.8,19.8,45.5,20.1,65v4.3c0,0.7,0.3,1.3,0.9,1.7
            c8.6,5.7,18.8,8.9,29.1,9h1h0.1c9.9-0.4,19.6-3.4,27.8-9c0.5-0.4,0.9-1,0.9-1.7V65C80.4,45.5,68.9,27.8,50.9,20.2z M34.7,36
            c7.3-8.6,15.4-11.5,15.4-11.5c1.7,0.8,21.2,8.4,25.2,33h-5.1l-9.8-14.1c-0.7-0.9-2-1.2-3-0.5c-0.3,0.1-0.4,0.4-0.5,0.5L54.4,47
            l-6.9-9.9c-0.7-0.9-2-1.2-3-0.5c-0.3,0.1-0.4,0.4-0.5,0.5L30.1,57.4L25,57.6C26.5,48.2,30.4,41.2,34.7,36z M65,57.6h-5.9h-6.8
            l3.3-4.7l3-4.4L65,57.6z M47,43.6L47,43.6L47,43.6l5,7.2l-4.7,6.7h-1.3H35.2l5.1-7.6l5.4-8l0,0L47,43.6z M51.8,72.6L51.8,72.6
            L50,75.8c-3.7,0-7.1-0.5-11-1.4l0,0c-5.1-1.3-10.1-3.4-14.5-6.1v-3.1c0-1,0-2.1,0.1-3.3H34h12.7c-1.7,2.6-0.9,6.1,1.8,7.7
            c0.3,0.1,0.5,0.3,0.7,0.4l2,0.9C51.8,71.1,52,71.9,51.8,72.6z M75.8,68.1c-3.3,2-6.7,3.7-10.2,4.8c0,0-0.7,0.3-0.9,0.3
            c-2,0.7-4,1.2-6.1,1.6c-1.2,0.3-2.4,0.4-3.5,0.5l0.4-0.7c1.6-2.7,0.7-6.1-2.1-7.7c-0.1-0.1-0.4-0.1-0.5-0.3l-2-0.9
            c-0.7-0.3-1-1-0.7-1.7c0-0.1,0.1-0.3,0.1-0.3l1.8-2.1h3.9h19.6c0,1,0.1,2.1,0.1,3.3V68.1z"/>
        </g>
      </g>
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1402 616" {...props}>
		  <path fill="currentColor" d="m1125 409.5l18 15.7-0.3 0.6c-0.2 0.5-21 45.8-78.1 54.1q-7.2 1.1-14 1c-20.7 0-38.2-7.1-50.1-20-7.8 13.6-22 31.5-43.3 34.7q-3.4 0.5-6.7 0.5c-8.4 0-15.9-2.5-22-7.3-6-4.7-10.4-11.4-12.9-19.7-6 3.9-13.7 7.2-23.3 8.6-6.7 1-12.8 1-18.2 0.1-9.5 20.6-26.2 33.7-47.1 36.7-16.1 2.4-31-2.9-42-14.9l-3.4 17.4-26.8 3.9 4.2-26.1c-4.6 2.1-10 3.8-16.1 4.7-6.7 0.9-12.8 1-18.2 0.1-9.5 20.6-26.1 33.6-46.9 36.7q-3.6 0.5-7.3 0.5c-11.6 0-22.6-4.2-31.5-12.1q-3.4-3.1-6.3-6.8c-8.3 13.3-21.7 28.1-40.6 30.8-20.1 3-42.1-6.6-46.2-34.5-2-13.5-0.7-24.5 2.8-42.5l3.9-22.4c1.6-9.4 3.1-20.2 1.8-28.9-1.4-10.1-4.9-17.7-10.2-22.6-5.6-5.1-13-7-22.1-5.7-20.9 3-35.2 23.1-40.4 56.3l-18 114.9-31.8 4.7 18.4-118c3.1-19.2 3.7-27.2 2.6-34.5-0.7-5.1-2.8-9.1-6.1-11.6-3.2-2.4-7.3-3.3-11.9-2.6-16.5 2.4-25.9 28.1-26 28.4l-0.3 1-20.6-12.6 0.2-0.7c0.2-0.4 14.4-42.2 49.3-47.2 17.6-2.6 31.8 4.9 38.3 19.9 13.3-18.9 30.2-29.9 50.2-32.8 31.5-4.6 55.1 14.9 60.2 49.7 1.4 10.2 0.8 23.6-1.8 37.7l-4.4 25.7c-3.3 18.2-4.9 27.3-3.7 35.5 0.7 4.9 2.9 8.8 6.2 11.2 3.1 2.3 7.2 3.2 11.8 2.5 13.2-1.9 22.1-17.9 26.3-27.4q-0.9-3.6-1.4-7.3c-5.3-36.4 13.2-77.6 53.3-83.4 14.4-2.1 28.1 1.9 38.8 11.4 10.4 9.3 17.4 23.3 19.8 39.6 1 7 1.2 13.6 0.5 20 4 0.2 7.7 0 11.4-0.5 11.2-1.6 17.9-7.1 21.4-11l22.1-137.6 29.9-4.3-11.7 65.8c5.1-2.5 10.8-4.3 17-5.2 14.3-2.1 28.1 2 38.9 11.5 10.5 9.3 17.6 23.4 19.9 39.6 1 6.9 1.2 13.5 0.6 19.9 3.9 0.2 7.5 0.1 11.1-0.4 11-1.6 17.6-6.8 21.3-10.7 0.6-7.3 1.7-15.7 3.3-26.1l17.1-111.6 29.4-4.2-18.4 119.8c-2.9 18-4 26.9-2.8 35.1 0.7 4.9 2.8 8.7 6.1 11.1 3.2 2.4 7.3 3.3 11.9 2.6 14.7-2.1 23.6-20.8 26.8-28.8q-1.9-5.7-2.8-12c-2.5-17.4 1.5-35.6 11.1-49.8 10.3-15.2 26.2-25.1 44.9-27.8 13.1-1.9 25.5 0.1 34.9 5.6 9.5 5.6 15.6 14.5 17.1 25.1 5.7 39-36.9 58.6-64 67 8.8 6.2 20.4 8.4 33.8 6.4 43.3-6 62.4-41.1 62.6-41.5zm-423.6 81.8c-19.3-12.1-31.4-34.3-32.5-59.8-17.2 6.2-24.8 28.3-22.1 46.7 2.8 19.7 15.5 31.5 31.4 29.2 9.2-1.4 17.4-7.1 23.2-16.1zm7.4-28.3c0-1.5-0.1-3-0.3-4.5-1.8-12.1-7.1-21.2-15-25.6 1.6 12.4 7 23 15.3 30.1zm141.8 6.6c-19.2-12-31.2-34.3-32.2-59.9-17.4 6.3-25.1 28.6-22.4 47 2.8 19.3 15.8 31.2 31.6 28.9 9-1.3 17.1-7 23-16zm7.7-28.1c-0.1-1.6-0.2-3.3-0.4-4.7-1.8-12.1-7.1-21.2-15-25.9 1.7 12.7 7.1 23.4 15.4 30.6zm156.1-13c25.3-8.3 54.4-22.3 51.5-42.5-1.5-10-10.9-15.3-24.1-13.4-19.9 2.9-33.5 22.8-30.4 44.2 0.6 4.2 1.6 8.1 3 11.7zm347.2-268.4l-0.2 0.6c-0.1 0.5-15.7 44.8-53.1 49.7q-2.9 0.3-5.7 0.3c-8.7 0-16.2-2.8-21.8-8.5-7.9-8-11.1-20.9-9-36.4l1.4-11.1c1.2-8.3 1.5-15.4 0.7-21.4-1.3-10.1-7-14.4-19.7-14.5-6.2 0-10.9-0.5-14.5-1.4-4.4 31.5-12.1 56-23.5 74.9l-0.5 0.9-1.2-1c-11 14-33.1 34.7-70.2 39.5q-6.7 0.9-12.9 0.9c-16.3 0-30.6-4.3-42.1-12.7q-4.9-3.6-8.9-8.1c-8 13.4-22.4 31.2-43.8 34-14.6 1.9-26.9-3-34.8-13.6-8.8 13-21.8 20.9-37.6 23q-3.4 0.4-6.6 0.4c-11.9 0-22.6-4.3-31.4-12.6q-3.2-3.1-5.9-6.9c-8.5 12.8-22.7 27.8-44 30.5-11.6 1.6-22-1.7-29.1-9.1-8.1-8.3-11.2-21-8.9-35.5l2.5-14.5 0.5-3.4c1.7-11.5 2.6-17.3 1.6-24.7-0.5-4.5-2.4-8.1-5.2-10.5-3.1-2.6-7.2-3.6-11.9-3-14.4 1.9-24.7 16.4-29 41l-11.5 67.5-29.1 3.8 0.3-1.9c-6.2 4.4-13.4 7.7-21.6 8.8-14.7 1.9-27-2.9-34.8-13.6-8.8 13-21.8 20.9-37.6 23q-3.3 0.4-6.4 0.4c-15.2 0-28.4-7.1-37.5-19.5-8.2 12.8-21.3 27.6-39 29.9-18.3 2.4-29.3-6.4-46.6-26.9-8.4 12-16.5 22.6-23.4 31.7l-0.3 0.3-33.2 4.3 1.3-1.7c16.6-22.4 28.5-39.4 38.7-54.9l-30.2-36.2c-1.1 10.6-3.3 21.1-7.1 32.8-2.2 7.4-4.9 14.6-8.1 21.6v0.1q-3.3 7.2-7.2 14l-0.5 0.9-1.2-1.1c-11 14.1-33.1 34.8-70.2 39.6q-6.7 0.9-12.9 0.9c-16.3 0-30.6-4.4-42.1-12.8q-4.9-3.6-8.9-8.1c-8 13.5-22.4 31.2-43.8 34q-3.1 0.4-6 0.4c-12.9 0-23.4-5.7-30-15.8-8.6 11.6-20.9 22.8-37.4 25-18.6 2.4-33.1-6.1-39.1-22.8-14.7 20.7-33.5 32.2-57.3 35.3q-3.5 0.5-6.9 0.5c-11.2 0-21.7-3.6-30.1-10.4-11.4-9.1-18.7-23.6-21-42-4.5-34.5 3.2-71.1 21.2-100.5 18.7-30.5 45.5-49.4 75.5-53.3 28.9-3.7 42.9 2.9 45.7 4.5l8.6-1.1-8.4 111.7c-3.2 17.9-4.4 26.7-3.3 35 1.2 9.8 8.2 15.2 17.7 14 13.9-1.8 23.3-19 27.3-28.3 0.3-9.2 1.9-20.1 4.4-34.9l18.8-111.2 29.3-3.8-20.1 119.5c-3.2 18-4.4 26.8-3.3 35.1 0.6 4.8 2.6 8.7 5.9 11.1 3.1 2.5 7.2 3.4 11.8 2.8 14.8-1.9 24-20.5 27.3-28.5q-1.8-5.7-2.6-11.9c-2.3-17.5 2-35.6 11.9-49.7 10.5-15 26.5-24.6 45.2-27 13.1-1.8 25.5 0.4 34.9 6.1 9.3 5.7 15.3 14.7 16.7 25.3 5.1 39.1-37.8 58.1-65 66.1 8.7 6.2 20.2 8.6 33.6 6.9 38.2-4.7 58-32.3 62.3-39.1 7.8-21.2 11.5-45.6 11.1-72.7v-0.8l31.3-4 38.2 46.3c10.2-18.2 18.2-35.9 24.2-54l0.2-0.5 32.3-4.2-0.5 1.4c-9 25.8-21.7 51.7-38.6 79l3.9 4.7c10.8 13.8 17.3 19.7 26.8 18.4 14-1.8 23-18.6 26.7-27.1q-0.7-3.5-1.2-7.2c-4.7-36 11.9-77.1 52-82.3 18.8-2.4 33.5 4.4 42.8 19.9l5-22 26.8-3.5-8.8 52.7c-3.2 17.9-4.3 26.7-3.2 35 0.6 4.9 2.6 8.7 5.8 11.2 3.2 2.4 7.3 3.4 11.9 2.8 13-1.7 21.6-16.3 25.8-25.2l13.5-82.4 24.8-3.2-1.4 13.9c8.5-12.8 20-20.4 33.6-22.2 10.6-1.4 19.8 0.9 26.6 6.6 6.2 5.3 10.2 13.3 11.5 23.1 1.3 10.4 0 19.1-2.2 32.2l-2.9 17c-1.5 8.2-0.5 14.5 3 18.1 2.7 2.8 6.6 4 11.4 3.4 14.2-1.9 23.3-18.7 27-27.3q-0.8-3.4-1.3-7.1c-2.5-19.4 1-38.5 9.8-53.6 9.5-16.2 24.5-26.4 42.3-28.7 18.2-2.4 32.3 3.9 41.9 18.5l14.9-87.2 29.4-3.8-20.4 119.6c-3.1 16.9-4.4 26.5-3.3 35 1.2 9.7 8.2 15.2 17.7 14 14.8-1.9 24-20.5 27.3-28.5q-1.8-5.8-2.6-12c-2.3-17.5 2-35.5 11.8-49.6 10.6-15.1 26.6-24.7 45.3-27.1 13.1-1.7 25.5 0.5 34.8 6.1 9.4 5.7 15.4 14.8 16.8 25.4 5 39-37.8 58-65.1 66 8.7 6.3 20.3 8.7 33.7 6.9 39.3-4.8 59.1-33.8 62.7-39.5 7.8-22.3 11.5-51.6 10.3-83.1v-0.8l27.5-3.5 0.1 0.8c1.5 11.4 5.8 14.2 22.2 14.2 22.2 0.1 35.2 10.6 37.8 30.3 1.2 9.5 0.3 20.8-1.8 37.3-1 9.2 0.2 15.6 3.5 18.9 2.3 2.2 5.5 3 9.6 2.5 18.3-2.4 28.1-31.7 28.2-32l0.3-1.1zm-1185.6 33.5c-5.1-0.9-12-1.4-20.2-0.4-20.9 2.7-39.9 17.5-53.4 41.5-12.4 22-18.1 48.4-15.2 70.6 1.4 10.8 5.1 18.9 10.9 24.1 5.5 4.9 12.8 6.9 21.2 5.8 28.6-3.8 46.6-36.4 51.7-67.2zm166.2 84.1c25.4-8 54.7-21.6 52.1-41.8-0.7-4.7-3.1-8.5-7.2-11-4.3-2.6-10-3.6-16.7-2.7-9.7 1.3-18.3 6.6-24.1 14.9-5.9 8.3-8.3 18.5-7 28.9 0.6 4.1 1.5 8.1 2.9 11.7zm349.6-60.1c-2.3-18.2-12.9-29.7-26.8-29.7q-1.6 0-3.4 0.2c-20.8 2.7-30.7 26.9-28 47.7 2.6 19.8 14.8 31.8 30.5 29.7 20.6-2.6 30.5-26.9 27.7-47.9zm301.8-39.3c-1.3-9.6-4.8-17.4-10.1-22.8-4.7-4.6-10.4-7-16.7-7q-1.7 0-3.4 0.3c-9.5 1.2-17.6 7.1-22.7 16.7-4.8 8.8-6.8 20.1-5.4 31 2.6 19.8 14.9 31.8 30.5 29.7 9.4-1.2 17.3-7.1 22.5-16.8 4.7-8.9 6.7-20.3 5.3-31.1zm101.3 1.3c25.4-7.9 54.7-21.5 52-41.7-0.6-4.8-3-8.6-7.1-11.1-4.3-2.6-10-3.5-16.7-2.7-19.9 2.6-33.9 22.3-31.1 43.8 0.6 4.2 1.5 8.1 2.9 11.7z"/>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}
