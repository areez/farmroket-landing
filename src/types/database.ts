export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          is_admin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      pilot_applications: {
        Row: {
          id: string
          user_id: string | null
          company_name: string
          contact_name: string
          email: string
          phone: string
          company_size: '1-10' | '11-50' | '51-200' | '201-500' | '500+'
          current_challenges: string[]
          interested_features: string[]
          timeline: 'immediate' | '1-3-months' | '3-6-months' | '6-12-months'
          additional_info: string | null
          status: 'pending' | 'approved' | 'rejected' | 'in_review'
          admin_notes: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          company_name: string
          contact_name: string
          email: string
          phone: string
          company_size: '1-10' | '11-50' | '51-200' | '201-500' | '500+'
          current_challenges: string[]
          interested_features: string[]
          timeline: 'immediate' | '1-3-months' | '3-6-months' | '6-12-months'
          additional_info?: string | null
          status?: 'pending' | 'approved' | 'rejected' | 'in_review'
          admin_notes?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          company_name?: string
          contact_name?: string
          email?: string
          phone?: string
          company_size?: '1-10' | '11-50' | '51-200' | '201-500' | '500+'
          current_challenges?: string[]
          interested_features?: string[]
          timeline?: 'immediate' | '1-3-months' | '3-6-months' | '6-12-months'
          additional_info?: string | null
          status?: 'pending' | 'approved' | 'rejected' | 'in_review'
          admin_notes?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Profile = Database['public']['Tables']['profiles']['Row']
export type PilotApplication = Database['public']['Tables']['pilot_applications']['Row']
export type PilotApplicationInsert = Database['public']['Tables']['pilot_applications']['Insert']
export type PilotApplicationUpdate = Database['public']['Tables']['pilot_applications']['Update']